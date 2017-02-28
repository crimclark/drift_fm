import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import OctaveUp from '../buttons/OctaveUp';
import OctaveDown from '../buttons/OctaveDown';
import { melodySynth, melodyPattern } from './melodyInstrument';

class Melody extends Component {
  constructor() {
    super()
    this.state = {
      melodyPattern: melodyPattern
    }
  }

  render() {

    melodySynth.set({'detune': this.props.detune})

    return (
      <div className="instrument">
        <h1>MELODY</h1>
        <div>
        Octave:
          <OctaveUp octaveHandler={this.props.octaveHandler} inst={melodySynth} synth={'melody'} />
          <OctaveDown octaveHandler={this.props.octaveHandler} inst={melodySynth} synth={'melody'} />
        </div>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.melodyPattern} />
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.melodyPattern} />
      </div>
      )
  }
}

export default Melody;
