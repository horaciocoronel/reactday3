import React, { Component } from 'react';

const Jumbo= (props) => {

  	    return(
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor: props.color}}>
		  <div className="container">
		    <h1 className="display-3" >{props.name}</h1>
		    <p className="lead">I am awesome </p>
		  </div>
		</div>
      )
  
}




export default Jumbo;
