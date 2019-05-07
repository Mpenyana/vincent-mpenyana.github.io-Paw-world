import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import logo from './pawprint.png';
import Nav from '../components/Nav';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField} from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) =>dispatch(setSearchField(event.target.value))
  }
}

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      cats: [],
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(cats =>{
      this.setState({cats: cats})
    })
  }

  render(){
    const { searchField, onSearchChange } = this.props
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
    this.state.cats.length === 0 ? <h1 className='f1 fw7 tc'>Loading...</h1>
    :
      <div className='tc'>
        <Nav>
          <p className='logo'><img src={logo} alt='logo'/></p>
          <SearchBox onSearchChange={onSearchChange}/>
        </Nav>
        <Scroll>
          <ErrorBoundary>
            <CardList cats={filteredCats}/>
          </ErrorBoundary>
        </Scroll>

        <div className='mt4 pa2'>logo downloaded from <a href="https://www.flaticon.com/"           
        title="Flaticon">www.flaticon.com</a>, licensed by 
        <a rel="noopener noreferrer" href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
