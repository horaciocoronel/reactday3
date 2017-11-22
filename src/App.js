import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';

class App extends Component {



  render(){

    return(
      <div>
       
    	<Navbar/>
    	<Jumbo name="Gurjant"/>
      </div>
      )
  }
}

export default App;
