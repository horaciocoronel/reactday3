import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Jumbo extends Component {
  render(){
  	    return(
      <div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-3">{this.props.name}</h1>
		    <p className="lead">I am awesome </p>
		  </div>
		</div>
      )
  }
}


Jumbo.PropTypes = {
  name: PropTypes.string
}


export default Jumbo;
