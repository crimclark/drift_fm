import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Results from './components/sample/Results';
import Global from './components/global/Global';
import Nav from './components/nav/Nav';
import SampleInstrument from './components/sample/SampleInstrument';
import Login from './components/login/Login';

import { melodySynth } from './components/melody/melodyInstrument';
import { chordSynth } from './components/chords/chordInstrument';

class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      currentPage: "LOGIN",
      searchResults: null,
      chords: {
        detune: 0,
        oscillator: {
          type: 'sine'
        }
      },
      melody: {
        detune: 0,
        oscillator: {
          type: 'sine'
        }
      },
      sample: {
        detune: 0,
        url: null,
        reverse: false
      }
    }
    this.setPage = this.setPage.bind(this);
    this.setResults = this.setResults.bind(this);
    this.startClickHandler = this.startClickHandler.bind(this);
    this.stopClickHandler = this.stopClickHandler.bind(this);
    this.detuneHandler = this.detuneHandler.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.setBuffer = this.setBuffer.bind(this);
    this.changeWave = this.changeWave.bind(this);
    this.setSliderVal = this.setSliderVal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.setReverse = this.setReverse.bind(this);
    this.startAll = this.startAll.bind(this);
    this.stopAll = this.stopAll.bind(this);
  }

  componentDidMount() {
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start();
  }

  setLoggedIn(song) {
    const { chords, melody, sample, _id } = song;
    this.setState({
      loggedIn: true,
      _id: _id,
      sample: sample[0],
      chords: chords[0],
      melody: melody[0]
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

  setBuffer(url) {
    const buffer = new Tone.Buffer(url, () => {
      SampleInstrument.set({'buffer': buffer})
    });
  }

  setUrl(url) {
    this.setState({
      sample: {
        ...this.state.sample,
        url: url
      }
    })
    this.setBuffer(url);
  }

  setReverse(bool) {
    this.setState({
      sample: {
        ...this.state.sample,
        reverse: bool
      }
    })
  }

  changeWave(wave, synth) {
    if (synth === 'melody') {
      this.setState({
        melody: {
          ...this.state.melody,
          oscillator: {type: wave}
        }
      })
    } else if (synth === 'chords') {
      this.setState({
        chords: {
          ...this.state.chords,
          oscillator: {type: wave}
        }
      })
    }
  }

  startAll(...patterns) {
    for (var i = 0; i < patterns.length; i++) {
      patterns[i].start();
    }
  }

  stopAll(...patterns) {
    for (var i = 0; i < patterns.length; i++) {
      patterns[i].stop();
    }
  }

  startClickHandler(pattern) {
    pattern.start('@8n');
  }

  stopClickHandler(pattern) {
    pattern.stop();
  }

  detuneHandler(val, synth) {
    const {melody, chords, sample} = this.state;
    if (synth === 'melody') {
      this.setState({
        melody: {
          ...melody,
          detune: melody.detune + val
        }
      })
    } else if (synth === 'chords') {
        this.setState({
          chords: {
            ...chords,
            detune: chords.detune + val
          }
        })
      } else if (synth === 'all') {
        this.setState({
          chords: {
            ...chords,
            detune: chords.detune + val
          },
          melody: {
            ...melody,
            detune: melody.detune + val
          },
          sample: {
            ...sample,
            detune: sample.detune + val
          }
        })
      }
  }

  handleSave() {
    const server = process.env.REACT_APP_SERVER;

    // prod route
    // const route = `${server}/save`;

    // dev route
    const route = '/save';

    fetch(route, {
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
    const { sample, chords, melody, currentPage, searchResults, loggedIn } = this.state;

    //initialize instruments to settings from state
    //need to refactor sample model to allow `SampleInstrument.set(sample)`
    melodySynth.set(melody);
    chordSynth.set(chords);
    SampleInstrument.set({
      detune: sample.detune
    });
    this.setBuffer(sample.url);

    let partial;
    if (currentPage === 'SAMPLE') {
      partial = <Sample startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                setResults={this.setResults} url={sample.url} setSliderVal={this.setSliderVal}
                detuneVal={sample.detune} setBuffer={this.setBuffer} setReverse={this.setReverse} />
    } else if (currentPage === 'MELODY') {
      partial = <Melody startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                detuneHandler={this.detuneHandler} changeWave={this.changeWave} />
    } else if (currentPage === 'RESULTS') {
      partial = <Results results={searchResults} setUrl={this.setUrl} />
    } else if (currentPage === 'CHORDS') {
      partial = <Chords startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                detuneHandler={this.detuneHandler} changeWave={this.changeWave} />
    } else if (currentPage === 'GLOBAL') {
      partial = <Global startAll={this.startAll} stopAll={this.stopAll} detuneHandler={this.detuneHandler} />
    }

    if (loggedIn) {
      return (
        <div className='App'>
          <Nav handleClick={this.setPage}/>
          {partial}
          <div className="save-button">
            <button className="pure-button" onClick={this.handleSave}>SAVE</button>
          </div>
        </div>
      );
    } else {
      return (
        <Login setLoggedIn={this.setLoggedIn} />
        )
    }
  }
}

export default App;
