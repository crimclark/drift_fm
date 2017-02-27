import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chords from './chords/Chords';
import Tone from 'tone';

class App extends Component {

  componentDidMount() {
    Tone.Transport.start();
  }

  render() {
    return (
      <div className="App">
        <Chords />
      </div>
    );
  }
}

export default App;
