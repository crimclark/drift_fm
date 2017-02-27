import React, { Component } from 'react';
import Tone from 'tone';
import './Chords.css';
import StartButton from './StartButton';
import StopButton from './StopButton';

class Chords extends Component {

  constructor(){
    super();
    this.startPattern = this.startPattern.bind(this);
  }

  startPattern() {
    var synth = new Tone.PolySynth(8, Tone.FMSynth).toMaster();
    var chord = new Tone.Event(function(rate){
      synth.triggerAttackRelease(["D4", "F4", "A4", "B4"], "4n");
    }, "4n");
    // Tone.Transport.start();
    chord.start();
    console.log('fuuuck')
  }

  render() {

    return (
      <div className="chords">
        <h1>CHORDS</h1>
        <StartButton onClick={this.startPattern} />
        <StopButton />
      </div>
    );
  }
}

export default Chords;
