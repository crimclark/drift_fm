import React from 'react';
import sinewave from '../../sinewave.png'

const WaveButton = ({changeWave, wave, instrument}) => {
  return (
    <img src={sinewave} onClick={ () => {
      changeWave(wave, instrument)
      }} className="pure-button" id="wave-button"></img>
    )
}

export default WaveButton;
