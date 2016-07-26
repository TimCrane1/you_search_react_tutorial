import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'yo utube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAXJgfNnbjJ9TCT_dwpZC0SJr-rP5JVKhE';




//whenever you use state make class-based instead of functional component
class App extends Component {
	constructor(props){ 
		super(props);

		this.state = { videos: []  };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos => {
		this.setState({ videos });
		});
 	}

 	render(){
 		return (
			<div>
				<SearchBar />
			</div>
		);
	}
 }
	




ReactDOM.render(<App />, document.querySelector('.container'));