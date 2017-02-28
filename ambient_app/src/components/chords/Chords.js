import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import { chordPattern, chordSynth } from './chordInstrument';
import OctaveUp from '../buttons/OctaveUp';
import OctaveDown from '../buttons/OctaveDown';

class Chords extends Component {

  constructor(){
    super();
    this.state = {
      chordPattern: chordPattern
    }
  }

  render() {

    chordSynth.set({'detune': this.props.detune})

    return (
      <div className="instrument">
        <h1>CHORDS</h1>
        <div>
        Octave:
          <OctaveUp octaveHandler={this.props.octaveHandler} inst={chordSynth} synth={'chords'} />
          <OctaveDown octaveHandler={this.props.octaveHandler} inst={chordSynth} synth={'chords'} />
        </div>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.chordPattern} />
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.chordPattern} />
      </div>
    );
  }
}

export default Chords;
