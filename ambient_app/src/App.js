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
      sample: {
        detune: 0,
        url: null
      }
    }
    this.setPage = this.setPage.bind(this);
    this.setResults = this.setResults.bind(this);
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
    this.octaveHandler = this.octaveHandler.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.changeWave = this.changeWave.bind(this);
    this.setSliderVal = this.setSliderVal.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start();
    fetch('/songs').then( song => song.json() ).then( song => {
      let { sample, _id } = song;
      console.log(_id);
      this.setState({
        _id: _id,
        sample: sample[0]
      })
    })
  }

  setSliderVal(val) {
    this.setState({
      sample: {
        ...this.state.sample,
        detune: val
      }
    })
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
      sample: {
        ...this.state.sample,
        url: url
      }
    })
    const buffer = new Tone.Buffer(url, () => {
      SampleInstrument.set({'buffer': buffer})
    });
  }

  changeWave(wave, instrument) {
    instrument.set({ oscillator: {type: wave} });
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

  handleSave() {
    fetch('/save', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then( console.log('saved!') );

  }


  render() {

    const { sample } = this.state;

    let partial;
    if (this.state.currentPage === 'SAMPLE') {
      partial = <Sample startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                setResults={this.setResults} url={sample.url} setSliderVal={this.setSliderVal} value={sample.detune}/>
    } else if (this.state.currentPage === 'MELODY') {
      partial = <Melody startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.melodyDetune} changeWave={this.changeWave} />
    } else if (this.state.currentPage === 'RESULTS') {
      partial = <Results results={this.state.searchResults} setUrl={this.setUrl} />
    } else {
      partial = <Chords startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={this.state.chordsDetune} changeWave={this.changeWave} />
    }

    return (
      <div className='App'>
        <Nav handleClick={this.setPage}/>
        {partial}
        <button className="pure-button" onClick={this.handleSave}>SAVE</button>
      </div>
    );
  }
}


export default App;
