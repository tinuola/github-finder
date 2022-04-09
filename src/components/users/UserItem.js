// Turning class-based component to functional component

import React from 'react';
import PropTypes from 'prop-types';

// Destructing user
const UserItem = ({user: {login, avatar_url, html_url}}) => {
// const UserItem = (props) => {

    // Remove render method
    // Remove this keyword since this is no longer a class component

    // const { login, avatar_url, html_url } = props.user;

    return (
      <div className='card text-center'>
        <img 
        src={avatar_url} 
        alt="" 
        className="round-img" 
        style={{width: '60px'}} />

        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    )

}

export default UserItem

// Type-checking of props
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}