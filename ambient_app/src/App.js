import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Nav from './components/nav/Nav';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: null,
      melodyDetune: 0,
      chordsDetune: 0
    }
    this.setPage = this.setPage.bind(this);
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
    this.octaveHandler = this.octaveHandler.bind(this);
  }

  setPage(page) {
    this.setState({
      currentPage: page
    })
  }

  componentDidMount() {
    // Tone.Transport.bpm.value = 40;
    Tone.Transport.start();
  }

  startClickHandler(pattern) {
    pattern.start();
  }

  stopClickHandler(pattern) {
    pattern.stop();
  }

  octaveHandler(inst, val, synth) {
    if (synth === 'melody') {
      this.setState({
        melodyDetune: this.state.melodyDetune + val
      })
    } else if (synth === 'chords') {
        this.setState({
          chordsDetune: this.state.chordsDetune + val
        })
      }
  }

  render() {
    let partial;
    if (this.state.currentPage === "SAMPLE") {
      partial = <Sample startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler} />
    } else if (this.state.currentPage === "MELODY") {
      partial = <Melody startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.melodyDetune} />
    } else {
      partial = <Chords startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.chordsDetune} />
    }

    return (
      <div className="App">
        <Nav handleClick={this.setPage}/>
        {partial}
      </div>
    );
  }
}

export default App;
