import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';
class App extends Component {

  render(){

    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Users />
        </div>
        
        {/* <UserItem /> */}
      </div>
    );
  }
}

export default App;
