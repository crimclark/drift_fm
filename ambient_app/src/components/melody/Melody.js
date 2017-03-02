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

  componentDidMount() {
    melodySynth.set({
      detune: this.props.detune,
      // oscillator: {type: this.props.wave}
    });
  }

  render() {

    melodySynth.set({'detune': this.props.detune})

    return (
      <div className="instrument melody">
        <h1>MELODY</h1>
        <div>
        Octave:
          <OctaveUp octaveHandler={this.props.octaveHandler} inst={melodySynth} synth='melody' />
          <OctaveDown octaveHandler={this.props.octaveHandler} inst={melodySynth} synth={'melody'} />
        </div>
        <div>
        Waveform:
          <WaveButton wave={'sine'} instrument={melodySynth} changeWave={this.props.changeWave} />
          <WaveButton wave={'square'} instrument={melodySynth} changeWave={this.props.changeWave} />
          <WaveButton wave={'sawtooth'} instrument={melodySynth} changeWave={this.props.changeWave} />
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
