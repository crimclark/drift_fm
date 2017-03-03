import React, { Component } from 'react';
import AllButton from '../buttons/AllButton';
import TransposeButton from '../buttons/TransposeButton';
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
          Transpose: <TransposeButton>+</TransposeButton><TransposeButton>-</TransposeButton>
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
          <AllButton>
            STOP ALL
          </AllButton>
        </div>
      </div>
      )
  }
}

export default Global;
