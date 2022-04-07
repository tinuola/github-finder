// Using Props (Navbar-1)

import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar-0';
import Navbar from './components/layout/Navbar-1';
import './App.css';
class App extends Component {

  render(){

    return (
      <div className='App'>
        {/* <Navbar /> */}

        <Navbar 
          title='Github Finder' 
          icon='fab fa-github'
        />
      </div>
    );
  }
}

export default App;
