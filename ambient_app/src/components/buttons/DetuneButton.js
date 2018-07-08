import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('songStore')
class DetuneButton extends Component {
  render() {
    const { songStore, val, synth, children } = this.props;

    return (
      <button
        onClick={() => songStore.detune(val, synth)}
        className="pure-button"
      >
        {children}
      </button>
    )
  }
}

export default DetuneButton;
