

import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  // Hardcoding users
  state = {
    users:[
      {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: 2,
        login: "defunkt",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        id: 3,
        login: "pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      }
    ]
  };

  render() {
    return (
      // Add styles with a variable object
      <div style={userStyle}>

          {/* Loop through users and create a list */}

        {this.state.users.map(user => (

          // <div>{user.login}</div>

          // Add unique key
          // <div key={user.id}>{user.login}</div>

          // Output user item instead of a div
          // Pass in the entire user as a prop to UserItem
          <UserItem key={user.id} user={user} />

        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
