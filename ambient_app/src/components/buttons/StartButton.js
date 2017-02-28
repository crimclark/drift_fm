import React, { Component } from 'react';

class StartButton extends Component {
  render() {
    return (
        <button className="pure-button" onClick={this.props.clickHandler}>Start</button>
      )
  }
}

export default StartButton;
