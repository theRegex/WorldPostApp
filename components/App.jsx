import React from 'react';
import Header from './Header.jsx';
import Posts from './Posts.jsx';


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return(
			<div>
				<Header/>
				<center><h1>WORLDPOST APP LOADED</h1></center>
				<Posts/>

			</div>
			)
	}
}

export default App;