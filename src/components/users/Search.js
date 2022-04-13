// Search users from github

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({
      // text:e.target.value

      // Best to use if there are multiple inputs
      [e.target.name]: e.target.value,
    });
  };

  // If we don't use arrow function then we have to bind 'this'; see form tag below
  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
          {/* onChange event is needed for input; to update state */}
          <input type='text' name='text' placeholder='Search Users' value={this.state.text} onChange={this.onChange} />
          <input type='submit' value='Search' className='btn btn-dark btn-block' />
        </form>
      </div>
    );
  }
}

export default Search;
