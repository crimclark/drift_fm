import React from 'react';
import TransportButton from '../buttons/TransportButton';

const Transport = ({handleStart, handleStop, pattern, startText, stopText, mode}) => {
  return (
    <div>
      <TransportButton handleClick={handleStart} pattern={pattern} mode={mode} >
        {startText}
      </TransportButton>
      <TransportButton handleClick={handleStop} pattern={pattern} mode={mode} >
        {stopText}
      </TransportButton>
    </div>
    )
}

export default Transport;
