import React, { Component } from 'react';
import './Chords.css';

class StartButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandler}>Stop</button>
      </div>
      )
  }
}

export default StartButton;
