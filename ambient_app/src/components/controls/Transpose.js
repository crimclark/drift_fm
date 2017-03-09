import React from 'react';
import DetuneButton from '../buttons/DetuneButton';

const Transpose = ({detuneHandler, synth, plus, minus, children}) => {
  return (
    <div>
    {children}
      <span>
        <DetuneButton detuneHandler={detuneHandler} synth={synth} val={plus}>+</DetuneButton>
        <DetuneButton detuneHandler={detuneHandler} synth={synth} val={minus}>-</DetuneButton>
      </span>
    </div>
    )
}

export default Transpose;
