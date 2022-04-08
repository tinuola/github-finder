// Adding state to component - with constructor()

import React, { Component } from 'react'

class UserItem extends Component {

  // One method of adding state to component is to use constructor
  // Constructor is a function that runs when component runs
  // Needs to call super() to call parent class constructor (?)
  constructor() {
    super()
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    }
  }

  render() {
    return (
      <div className='card text-center'>
        {/* Using inline CSS */}
        <img src={this.state.avatar_url} alt="" className='round-img' style={{width: '60px'}} />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    )
  }
}

export default UserItem;