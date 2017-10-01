import React, { Component } from 'react';
import InstrumentContainer from '../InstrumentContainer';
import Transpose from '../controls/Transpose';
import Waveform from '../controls/Waveform';
import { melodyPattern } from './melodyInstrument';

class Melody extends Component {

  render() {
    const { handleSave, detuneHandler, startClickHandler, stopClickHandler, guest, changeWave } = this.props;

    return (
      <InstrumentContainer
        header='M E L O D Y'
        color='#C16F7A'
        pattern={melodyPattern}
        startClickHandler={startClickHandler}
        stopClickHandler={stopClickHandler}
        handleSave={handleSave}
        guest={guest}
      >
        <Transpose
          detuneHandler={detuneHandler}
          synth='melody'
          plus={1200}
          minus={-1200}
        >
          Octave:
        </Transpose>
        <Waveform changeWave={changeWave} synth='melody' />
      </InstrumentContainer>
    )
  }
}

export default Melody;