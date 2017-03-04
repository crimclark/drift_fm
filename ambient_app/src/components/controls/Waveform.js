import React from 'react';
import WaveButton from '../buttons/WaveButton';
import sinewave from '../../sinewave.png';
import sawtooth from '../../sawtooth.png';
import squarewave from '../../squarewave.png';

const Waveform = ({changeWave, synth}) => {
  return (
    <span>
      <WaveButton wave='sine' synth={synth} changeWave={changeWave} img={sinewave} alt='sine' />
      <WaveButton wave='square' synth={synth} changeWave={changeWave} img={squarewave} alt='square' />
      <WaveButton wave='sawtooth' synth={synth} changeWave={changeWave} img={sawtooth} alt='saw' />
    </span>
    )
}

export default Waveform;
