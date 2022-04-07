 // Creating JSX expressions and conditionals

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // Method as part of the class; should be referenced with "this" keyword
  drinks = () => 'Kombucha';

  render(){
    
    const name = 'Mira Doe';

    // Method declared in the render method
    const food = () => "Lentil Dal";

    // Using conditionals
    const loading = true;
    const showName = true;

    return (
      <>
        <h2>Hello {name}.</h2>

        <p>Lunch is at {2 + 3}.</p>
        
        {/* Methods */}
        <p>Your favorite food is {food()} and you like to drink {this.drinks()}.</p>

        {/* Conditionals */}
        {loading ? <h2>Goodbye {name.toUpperCase()}</h2>: null}

        {/* Variation on using ternary operator; uses &&, no null value */}
        {showName && <h2>Goodbye {name.toUpperCase()}</h2>}
        
      </>
    );
  }
}

export default App;
