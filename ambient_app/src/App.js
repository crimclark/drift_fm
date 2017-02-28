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
      detune: 0
    }
    this.setPage = this.setPage.bind(this);
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
    this.octaveHandler = this.octaveHandler.bind(this);
    // this.octaveDownHandler = this.octaveDownHandler.bind(this);
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

  octaveHandler(inst, val) {
    this.setState({
      detune: this.state.detune + val
    })
  }

  // octaveDownHandler(inst) {
  //   this.setState({
  //     detune: this.state.detune - 1200
  //   })
  // }

  render() {
    let partial;
    if (this.state.currentPage === "SAMPLE") {
      partial = <Sample startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler} />
    } else if (this.state.currentPage === "MELODY") {
      partial = <Melody startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.detune} />
    } else {
      partial = <Chords startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler} />
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
