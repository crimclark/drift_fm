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

    function randomIndex(array) {
      return Math.floor(Math.random() * array.length);
    }

    function randomChord(randomIndex) {
      var i = randomIndex(chords);
      // console.log(chords[i]);
      return chords[i];
    }

    var chords = [
      ["C4", "E4", "G4", "B4"],
      ["C4", "D4", "F4", "A4"],
      ["D4", "E4", "G4", "B4"],
      ["C4", "E4", "F4", "A4"],
      ["D4", "F4", "G4", "B4"],
      ["C4", "E4", "G4", "A4"],
      ["D4", "F4", "A4", "B4"]
    ];

    var synth = new Tone.PolySynth(8, Tone.FMSynth).toMaster();

    var chord = new Tone.Event(function(rate){
      synth.triggerAttackRelease(randomChord(randomIndex), "4n");
    })
    chord.loop = true;
    chord.start();
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
