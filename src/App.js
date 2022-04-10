// Add axios
// Update state

import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }
  // While data is loading, 

  // Add lifecycle
  // Make request to github api when component loads
  
  // refactored to use async await
  // put users from data into state
  async componentDidMount(){
    
    this.setState({
      loading:true
    })

    const res = await axios.get('https://api.github.com/users');
    console.log(res.data)
    
    // reset state after data is retrieved
    this.setState({
      users: res.data,
      loading: false
    })
  }

  // componentDidMount(){
  //   axios
  //   .get('https://api.github.com/users')
  //   .then(res => console.log(res.data));
  // }


  render(){

    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          {/* pass data to users component through props */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
