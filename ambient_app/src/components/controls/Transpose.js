import React from 'react';
import DetuneButton from '../buttons/DetuneButton';

const Transpose = ({synth, plus, minus, children}) => {
  return (
    <div>
    {children}
      <span>
        <DetuneButton synth={synth} val={plus}>+</DetuneButton>
        <DetuneButton synth={synth} val={minus}>-</DetuneButton>
      </span>
    </div>
    )
}

export default Transpose;
