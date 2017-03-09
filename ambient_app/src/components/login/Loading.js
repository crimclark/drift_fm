import React from 'react';
const Spinner = require('react-spinkit');

const Loader = require('halogen/ScaleLoader');

const Loading = () => {

  return (
      <div id="loading">
         <Loader color="white" size="16px" margin="4px"/>
        <p>Waking up our server... please be patient :)</p>
      </div>
    )
}

export default Loading;
