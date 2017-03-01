import React from 'react';

const WaveButton = ({changeWave, wave, instrument}) => {
  return (
    <button onClick={ () => {
      changeWave(wave, instrument)
      }} className="pure-button">{wave}</button>
    )
}

export default WaveButton;
