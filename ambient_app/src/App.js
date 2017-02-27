import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import Chords from './components/chords/Chords';

class App extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     chord: chord
  //   }
  //   this.startClickHandler = this.startClickHandler.bind(this);
  //   this.stopClickHandler = this.stopClickHandler.bind(this);
  // }

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
