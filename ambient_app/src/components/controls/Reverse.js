import React, { Component } from 'react';
import sampleInstrument from '../sample/SampleInstrument';

class Reverse extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let reverse = sampleInstrument.reverse ? false : true;
    sampleInstrument.set({ reverse: reverse });
    this.props.setReverse(reverse)
  }

  render() {
    return (
      <div>
        <button className="pure-button" onClick={this.handleClick}>Reverse</button>
      </div>
    )
  }
}

export default Reverse;
