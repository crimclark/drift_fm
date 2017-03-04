import React from 'react';
import Transpose from '../controls/Transpose';
import Transport from '../controls/Transport';
import BPMSlider from '../buttons/BPMSlider';
import './global.css';
import { melodyPattern } from '../melody/melodyInstrument';
import { chordPattern } from '../chords/chordInstrument';
import sampleInstrument from '../sample/SampleInstrument';

const Global = ({detuneHandler, startAll, stopAll}) => {
  return (
    <div className="instrument global">
      <h1>G L O B A L</h1>
      <div>
        Transpose:
        <Transpose detuneHandler={detuneHandler} synth='all' plus={100} minus={-100} />
      </div>
      <div>
        <BPMSlider min={5} max={105} value={55} />
      </div>
      <Transport handleStart={startAll} handleStop={stopAll}
      pattern={[melodyPattern, chordPattern, sampleInstrument]}
      startText='START ALL' stopText='STOP ALL' mode='all' />
    </div>
    )
}

export default Global;
