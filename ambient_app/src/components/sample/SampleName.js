import React, {Component} from 'react';

const SampleName = ({name}) => {
  let loadMsg = !name ? 'No Sound Loaded' : name;

  return (
    <div>
      {loadMsg}
    </div>
  )
}

export default SampleName;
