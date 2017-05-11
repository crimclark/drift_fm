import React, { Component } from 'react';

class TransposeButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button className="pure-button" onClick={this.handleClick}>{this.props.children}</button>
    )
  }
}

export default TransposeButton;
