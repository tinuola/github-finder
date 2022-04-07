import React, { Component } from 'react';

class UserItem extends Component {

  // Add state in component
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  }

  render() {
    // Destructuring the state values
    const { login, avatar_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img 
        // src={this.state.avatar_url} 
        src={avatar_url} 
        alt="" 
        className="round-img" 
        style={{width: '60px'}} />

        {/* <h3>{this.state.login}</h3> */}
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    )
  }
}

export default UserItem
