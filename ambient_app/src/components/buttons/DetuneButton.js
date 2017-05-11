import React, { Component } from 'react';

class DetuneButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {synth, val, detuneHandler} = this.props;
    detuneHandler(val, synth);
  }

  render() {
    return (
      <button onClick={this.handleClick} className="pure-button">{this.props.children}</button>
    )
  }
}

export default DetuneButton;
