import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Body from './Body';

class App extends Component {

	constructor(){
		super();
		this.changeColor = this.changeColor.bind(this);
		this.changeNavbar = this.changeNavbar.bind(this)
		this.state = {
			name: "Gurjant",
			color: "white",
			navbar: "navbar navbar-expand-lg navbar-light bg-light"
		}
	}

	changeColor(value){
		this.setState({
			color: value
		})
	}

	changeNavbar(){
		this.setState({
			navbar: "navbar navbar-expand-lg navbar-dark bg-dark"
		})
	}

  render(){

    return(
      <div>
    	<Navbar navClass={this.state.navbar}/>
    	<Jumbo name={this.state.name} color={this.state.color}/>
    	<Body change={this.changeColor} changeNavbar={this.changeNavbar}/>
      </div>
      )
  }
}

export default App;
