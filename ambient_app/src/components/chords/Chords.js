import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import { chordPattern, chordSynth } from './chordInstrument';
import OctaveUp from '../buttons/OctaveUp';
import OctaveDown from '../buttons/OctaveDown';
import WaveButton from '../buttons/WaveButton';
import './chords.css';

class Chords extends Component {

  constructor(){
    super();
    this.state = {
      chordPattern: chordPattern
    }
  }

  render() {

    chordSynth.set(this.props.settings);

    return (
      <div className="instrument chords">
        <h1>CHORDS</h1>
        <div>
        Octave:
          <OctaveUp octaveHandler={this.props.octaveHandler} synth='chords' />
          <OctaveDown octaveHandler={this.props.octaveHandler} synth='chords' />
        </div>
        <div>
        Waveform:
          <WaveButton wave='sine' synth='chords' changeWave={this.props.changeWave} />
          <WaveButton wave='square' synth='chords' changeWave={this.props.changeWave} />
          <WaveButton wave='sawtooth' synth='chords' changeWave={this.props.changeWave} />
        </div>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.chordPattern}>
          Start
        </StartButton>
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.chordPattern} />
      </div>
    );
  }
}

export default Chords;
