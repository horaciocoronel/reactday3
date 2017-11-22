import React, { Component } from 'react';

class Body extends Component {

	constructor(){
		super();
		this.state = {
			input: "placeholder"		}

	}

	changeInput(event){
		console.log(event.target.value)
		this.setState({
			input: event.target.value
		})
		this.props.change(event.target.value)
	}

 render(){
 	return (
 		<div>
 		 <p>Color:</p>
 			<input type="text" value={this.state.input} onChange={(event) => this.changeInput(event)}/>
 			<br/><button onClick={this.props.changeNavbar}>Make Navbar Darker</button>
 		</div>
 	)
 }
}

export default Body;