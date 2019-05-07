import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super()
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error, info){
		this.setState({
			hasError: true
		})
	}

	render(){
		return(
			this.state.hasError? <h1>Oops! Something went wrong on our end. Please try again</h1>:
			this.props.children
		)
	}
}

export default ErrorBoundary;