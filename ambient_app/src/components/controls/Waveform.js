import React from 'react';
import WaveButton from 'src/components/buttons/WaveButton';

const sinewave = '../../../assets/sinewave.png';
const sawtooth = '../../../assets/sawtooth.png';
const squarewave = '../../../assets/squarewave.png';

const Waveform = ({changeWave, synth}) => {
  return (
    <div>
      Waveform:
      <span>
        <WaveButton wave='sine' synth={synth} changeWave={changeWave} img={sinewave} alt='sine' />
        <WaveButton wave='square' synth={synth} changeWave={changeWave} img={squarewave} alt='square' />
        <WaveButton wave='sawtooth' synth={synth} changeWave={changeWave} img={sawtooth} alt='saw' />
      </span>
    </div>
  )
};

export default Waveform;
