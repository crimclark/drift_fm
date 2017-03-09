import React from 'react';

const Loader = require('halogen/ScaleLoader');

const Loading = () => {

  return (
      <div id="loading" className="fadeIn">
         <Loader color="white" size="16px" margin="4px"/>
        <p>Loading...</p>
      </div>
    )
}

export default Loading;
