import React, { Component } from 'react';

export default class Keypad extends Component {

  handleKeyboard = (event) => {
    console.log('Entering password...')
  }

  render() {
    return <input type='password' onKeyUp={this.handleKeyboard} />;
  }
}