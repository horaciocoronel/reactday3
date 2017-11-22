import React, { Component } from 'react';
class Zoom extends Component {

	constructor(props){
		super(props)
		this.add = this.add.bind(this)
		this.sub = this.sub.bind(this)
		this.state = {
			height: 100		}
	}

	add(){
		this.setState({
			height: this.state.height + 20
		})
	}

	sub(){
		this.setState({
			height: this.state.height - 20
		})

	}

  render(){
  	    return(
      	<div>
      	<button onClick={this.add}>+</button>
      		<button onClick={this.sub}>-</button>
      		<img height={this.state.height} src="http://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg"/>
      		
      	</div>

      )
  }
}

export default Zoom;