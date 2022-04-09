// Converting to functional component

import React from 'react';
import PropTypes from 'prop-types';

// Destructuring
const Navbar = ({icon, title}) => {
// const Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> 
        {title}
      </h1>
    </nav>
  )
}

export default Navbar

// Default props to use if no props are passed in App.js
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

// Type-checking of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}