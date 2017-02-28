import React, { Component } from 'react';
import './Chords.css';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import chord from './chordInstrument'


class Chords extends Component {

  constructor(){
    super();
    this.state = {
      chord: chord
    }
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
  }

  startClickHandler() {
    this.state.chord.start();
  }

  stopClickHandler() {
    this.state.chord.stop();
  }

  render() {

    return (
      <div className="instrument">
        <h1>CHORDS</h1>
        <StartButton clickHandler={this.startClickHandler} />
        <StopButton clickHandler={this.stopClickHandler} />
      </div>
    );
  }
}

export default Chords;
