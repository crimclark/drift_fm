import React from 'react';

const WaveButton = ({changeWave, wave, synth, img, alt}) => {
  return (
    <span className="wave-button">
    <img src={img} alt={alt} onClick={ () => {
      changeWave(wave, synth)
      }} className="pure-button" id="wave-button"></img>
    </span>
    )
}

export default WaveButton;
