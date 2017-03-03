import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import OctaveUp from '../buttons/OctaveUp';
import OctaveDown from '../buttons/OctaveDown';
import { melodySynth, melodyPattern } from './melodyInstrument';
import WaveButton from '../buttons/WaveButton';
import './melody.css';

class Melody extends Component {
  constructor() {
    super()
    this.state = {
      melodyPattern: melodyPattern
    }
  }

  render() {

    return (
      <div className="instrument melody">
        <h1>MELODY</h1>
        <div>
        Octave:
          <OctaveUp octaveHandler={this.props.octaveHandler} synth='melody' />
          <OctaveDown octaveHandler={this.props.octaveHandler} synth='melody' />
        </div>
        <div>
        Waveform:
          <WaveButton wave='sine' synth='melody' changeWave={this.props.changeWave} />
          <WaveButton wave='square' synth='melody' changeWave={this.props.changeWave} />
          <WaveButton wave='sawtooth' synth='melody' changeWave={this.props.changeWave} />
        </div>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.melodyPattern} >
          Start
        </StartButton>
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.melodyPattern} />
      </div>
      )
  }
}

export default Melody;
