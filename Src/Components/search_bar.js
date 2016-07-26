import React, { Component } from 'react';
//curly braces mean import react and pull off prop component as a variable called component

//new class
//and define render method on the class

//class based componenets must have render method and then JSX

//constructor function
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div>
			 <input 
			 	value={this.state.term}
			 	onChange={event => this.setState({ term: event.target.value})} />
			 </div>
		);
	}
}

export default SearchBar;