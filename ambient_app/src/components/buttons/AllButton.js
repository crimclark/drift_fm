import React, { Component } from 'react';

class AllButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleStart, melodyPattern, samplePattern, chordPattern } = this.props;
    handleStart(melodyPattern, chordPattern, samplePattern);
  }

  render() {
    return (
        <button className="pure-button" onClick={this.handleClick}>{this.props.children}</button>
      )
  }
}

export default AllButton;
