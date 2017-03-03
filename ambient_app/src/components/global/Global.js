import React, { Component } from 'react';
import AllButton from '../buttons/AllButton';
import Transpose from '../controls/Transpose';
import BPMSlider from '../buttons/BPMSlider';
import './global.css';
import { melodyPattern } from '../melody/melodyInstrument';
import { chordPattern } from '../chords/chordInstrument';
import sampleInstrument from '../sample/SampleInstrument';

class Global extends Component {

  constructor() {
    super()
    // this.state = {
    //   melodyPattern: melodyPattern
    // }
  }

  render() {
    // console.log(melodyPattern);
    // const patterns = [melodyPattern, chordPattern, sampleInstrument];

    return (
      <div className="instrument global">
        <h1>GLOBAL</h1>
        <div>
          Transpose:
          <Transpose detuneHandler={this.props.detuneHandler} synth='all' plus={100} minus={-100} />
        </div>
        <div>
          <BPMSlider min={5} max={105} value={55} />
        </div>
        <div>
          <AllButton handleStart={this.props.startAll}
            melodyPattern={melodyPattern}
            chordPattern={chordPattern}
            samplePattern={sampleInstrument}>
            START ALL
          </AllButton>
          <AllButton handleStart={this.props.stopAll}
            melodyPattern={melodyPattern}
            chordPattern={chordPattern}
            samplePattern={sampleInstrument}>
            STOP ALL
          </AllButton>
        </div>
      </div>
      )
  }
}

export default Global;
