// Class based components

import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
/* Cannot return directly from a class. A method (render - a lifecycle methd that runs at a given point) is needed */
  render(){
    return (
      <Fragment>
        <h1>Hello Dear.</h1>
        <h2>Goodbye Sweetie.</h2>
        <h3>See You Later.</h3>
      </Fragment>
    );
  }
}

export default App;