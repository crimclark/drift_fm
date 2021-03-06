import React, { Component } from 'react';
import InstrumentContainer from './InstrumentContainer';
import Transpose from './controls/Transpose';

import sampleInstrument from './sample/SampleInstrument';
import { chordPattern } from './chords/chordInstrument';
import { melodyPattern } from './melody/melodyInstrument';

class Global extends Component {

  render() {
    const { detuneHandler, handleSave, startClickHandler, stopClickHandler, guest } = this.props;

    return (
      <InstrumentContainer
        header='G L O B A L'
        color='#7DB064'
        pattern={[melodyPattern, chordPattern, sampleInstrument]}
        startClickHandler={startClickHandler}
        stopClickHandler={stopClickHandler}
        handleSave={handleSave}
        guest={guest}
        mode="all"
      >
        <Transpose
          detuneHandler={detuneHandler}
          synth='all'
          plus={100}
          minus={-100}
        >
          Octave:
        </Transpose>
      </InstrumentContainer>
    )
  }
}

export default Global;