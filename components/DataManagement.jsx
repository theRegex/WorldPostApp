import React from 'react';


class DataManagement extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
		this.dataReady = true;
	}

	render(){
		if(this.dataReady){
			return (<div>{this.props.children}</div>)
		}

		return (<h1>Loading....</h1>)
	}
}

export default DataManagement;