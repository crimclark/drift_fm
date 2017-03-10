import React from 'react';
import Transport from './components/controls/Transport';
import SaveButton from './components/buttons/SaveButton';

const Page = ({header, color, children, startClickHandler, stopClickHandler, pattern, startText, stopText, mode, handleSave}) => {
    return (
      <div>
        <div className="instrument" style={{backgroundColor: color}}>
          <h1>{header}</h1>

          {children}

          <Transport handleStart={startClickHandler} handleStop={stopClickHandler}
          pattern={pattern} mode={mode} />
        </div>
        <SaveButton handleSave={handleSave} />
      </div>
  )
};

export default Page;
