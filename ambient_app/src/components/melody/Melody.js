import Tone from 'tone';
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
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
  }

  startClickHandler() {
    this.state.melodyPattern.start();
  }

  stopClickHandler() {
    this.state.melodyPattern.stop();
  }

  render() {
    return (
      <div className="instrument">
        <h1>MELODY</h1>
        <StartButton clickHandler={this.startClickHandler} />
        <StopButton clickHandler={this.stopClickHandler} />
      </div>
      )
  }
}

export default Melody;
