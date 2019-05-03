import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import logo from './pawprint.png';
import Nav from '../components/Nav';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(cats =>{
      this.setState({cats: cats})
    })
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render(){
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return(
    this.state.cats.length === 0 ? <h1 className='f1 fw7 tc'>Loading...</h1>
    :
      <div className='tc'>
        <Nav>
          <p className='logo'><img src={logo} alt='logo'/></p>
          <SearchBox onSearchChange={this.onSearchChange}/>
        </Nav>
        <Scroll>
          <CardList cats={filteredCats}/>
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

export default App;
