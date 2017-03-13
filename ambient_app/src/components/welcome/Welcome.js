import React from 'react';
import './welcome.css';

const Welcome = () => {

  return (
    <div>
      <div id="welcome-container">
        <h1 id="welcome">WELCOME</h1>
        <div id="welcome-text">
          Drift.FM is a web app that generates random music in your browser.
          To begin, click on any of the instruments in the above navigation bar
          and press the "Start" button.  Play around with the instrument settings
          to hear how they alter the sound, or simply let the sound drift along
          in the background as you go about the rest of your day.

        </div>
      </div>
      <p id="disclaimer">Note: The Web Audio API is an experimental technology which is not yet
      supported by all browsers.  For the best exprience, please consider using
      the latest versions of Google Chrome or Mozilla Firefox.</p>
    </div>
    )
}

export default Welcome;
