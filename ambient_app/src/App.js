import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Results from './components/sample/Results';
import Nav from './components/nav/Nav';
import SampleInstrument from './components/sample/SampleInstrument';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: null,
      searchResults: null,
      melodyDetune: 0,
      chordsDetune: 0,
      sampleUrl: null
    }
    this.setPage = this.setPage.bind(this);
    this.setResults = this.setResults.bind(this);
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
    this.octaveHandler = this.octaveHandler.bind(this);
    this.setUrl = this.setUrl.bind(this);
  }

  setPage(page) {
    this.setState({
      currentPage: page
    })
  }

  setResults(results) {
    this.setState({
      searchResults: results,
      currentPage: 'RESULTS'
    })
  }

  setUrl(url) {
    this.setState({
      sampleUrl: url
    })
    const buffer = new Tone.Buffer(url, () => {
      SampleInstrument.set({'buffer': buffer})
    });
  }

  componentDidMount() {
    Tone.Transport.bpm.value = 60;
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
    if (this.state.currentPage === 'SAMPLE') {
      partial = <Sample startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                setResults={this.setResults} url={this.state.sampleUrl} />
    } else if (this.state.currentPage === 'MELODY') {
      partial = <Melody startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.melodyDetune} />
    } else if (this.state.currentPage === 'RESULTS') {
      partial = <Results results={this.state.searchResults} setUrl={this.setUrl} />
    } else {
      partial = <Chords startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.chordsDetune} />
    }

    return (
      <div className='App'>
        <Nav handleClick={this.setPage}/>
        {partial}
      </div>
    );
  }
}


export default App;
