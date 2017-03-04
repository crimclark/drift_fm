import React from 'react';
import Transpose from '../controls/Transpose';
import Transport from '../controls/Transport';
import Waveform from '../controls/Waveform';
import { melodyPattern } from './melodyInstrument';
import './melody.css';

const Melody = ({detuneHandler, changeWave, startClickHandler, stopClickHandler}) => {
  return (
    <div className="instrument melody">
      <h1>M E L O D Y</h1>
      <div>
      Octave:
        <Transpose detuneHandler={detuneHandler} synth='melody' plus={1200} minus={-1200} />
      </div>
      <div>
      Waveform:
        <Waveform changeWave={changeWave} synth='melody' />
      </div>
      <Transport handleStart={startClickHandler} handleStop={stopClickHandler}
      pattern={melodyPattern} startText='START' stopText='STOP' mode='one' />
    </div>
    )
}

export default Melody;
