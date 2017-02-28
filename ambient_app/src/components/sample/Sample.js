import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import sampleInstrument from './SampleInstrument'

class Sample extends Component {
  constructor() {
    super()
    this.state = {
      samplePattern: sampleInstrument
    }
  }

  render() {
    return (
      <div className="instrument">
        <h1>SAMPLE</h1>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.samplePattern} />
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.samplePattern} />
      </div>
      )
  }
}

export default Sample;
