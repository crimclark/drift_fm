import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import chord from './chordInstrument'

class Chords extends Component {

  constructor(){
    super();
    this.state = {
      chordPattern: chord
    }
  }

  render() {

    return (
      <div className="instrument">
        <h1>CHORDS</h1>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.chordPattern} />
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.chordPattern} />
      </div>
    );
  }
}

export default Chords;
