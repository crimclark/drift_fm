import React from 'react';
import { chordPattern } from './chordInstrument';
import Transpose from '../controls/Transpose';
import Transport from '../controls/Transport';
import Waveform from '../controls/Waveform';
import './chords.css';

const Chords = ({detuneHandler, changeWave, startClickHandler, stopClickHandler}) => {
    return (
      <div className="instrument chords">
        <h1>C H O R D S</h1>
        <div>
        Octave:
          <Transpose detuneHandler={detuneHandler} synth='chords' plus={1200} minus={-1200} />
        </div>
        <div>
        Waveform:
          <Waveform changeWave={changeWave} synth='chords' />
        </div>
        <Transport handleStart={startClickHandler} handleStop={stopClickHandler}
        pattern={chordPattern} startText='START' stopText='STOP' mode='one' />
      </div>
  )
};

export default Chords;
