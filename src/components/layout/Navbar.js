// Default Props
// Prop Types

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {

  // Default props to use if no props are passed in App.js
  static  defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  // Type-checking of props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> 
          {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar
