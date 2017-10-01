import React from 'react';
import Transport from './controls/Transport';
import SaveButton from './buttons/SaveButton';

const InstrumentContainer = ({ header, color, children, startClickHandler, stopClickHandler, pattern, mode, handleSave, guest }) => {
  let saveButton;

  if (!guest) saveButton = <SaveButton handleSave={handleSave} />;

  return (
    <div className="instrument" style={{backgroundColor: color}}>
      <h1>{header}</h1>

      {children}

      <Transport
        handleStart={startClickHandler}
        handleStop={stopClickHandler}
        pattern={pattern}
        mode={mode}
      />
      {saveButton}
    </div>
  )
};

export default InstrumentContainer;
