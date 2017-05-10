import React from 'react';
import Transport from './components/controls/Transport';
import SaveButton from './components/buttons/SaveButton';

const Page = ({header, color, children, startClickHandler, stopClickHandler, pattern, mode, handleSave, guest}) => {
  let save;
  if (!guest) {
    save = <SaveButton handleSave={handleSave} />
  }

  return (
    <div>
      <div className="instrument" style={{backgroundColor: color}}>
        <h1>{header}</h1>

        {children}

        <Transport handleStart={startClickHandler} handleStop={stopClickHandler}
        pattern={pattern} mode={mode} />
      </div>
      {save}
    </div>
  )
};

export default Page;
