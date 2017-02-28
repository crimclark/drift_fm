// import Tone from 'tone';
import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import melodyPattern from './melodyInstrument'

class Melody extends Component {
  constructor() {
    super()
    this.state = {
      melodyPattern: melodyPattern
    }
  }

  render() {
    return (
      <div className="instrument">
        <h1>MELODY</h1>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.melodyPattern} />
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.melodyPattern} />
      </div>
      )
  }
}

export default Melody;
