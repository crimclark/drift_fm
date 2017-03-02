import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Results from './components/sample/Results';
import Nav from './components/nav/Nav';
import SampleInstrument from './components/sample/SampleInstrument';
import Login from './components/login/Login';

// const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      currentPage: "LOGIN",
      searchResults: null,
      melodyDetune: 0,
      chordsDetune: 0,
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
    this.octaveHandler = this.octaveHandler.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.setBuffer = this.setBuffer.bind(this);
    this.changeWave = this.changeWave.bind(this);
    this.setSliderVal = this.setSliderVal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  componentDidMount() {
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start();
    // if (this.state.loggedIn) {
    //   fetch('/songs').then( song => song.json() ).then( song => {
    //     let { chords, melody, sample, _id } = song;
    //     this.setState({
    //       _id: _id,
    //       sample: sample[0],
    //       chords: chords[0],
    //       melody: melody[0]
    //     })
    //   })
    // }
  }

  setLoggedIn(song) {
    const { chords, melody, sample, _id } = song;
    console.log(chords);
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
    console.log(url)
    this.setState({
      sample: {
        ...this.state.sample,
        url: url
      }
    })
    this.setBuffer(url);
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
        melody: {
          ...this.state.melody,
          detune: this.state.melody.detune + val
        }
      })
    } else if (synth === 'chords') {
        this.setState({
          chords: {
            ...this.state.chords,
            detune: this.state.chords.detune + val
          }
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
    const { sample, chords, melody } = this.state;
    let partial;
    if (this.state.currentPage === 'SAMPLE') {
      partial = <Sample startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                setResults={this.setResults} url={sample.url} setSliderVal={this.setSliderVal}
                detuneVal={sample.detune} setBuffer={this.setBuffer} />
    } else if (this.state.currentPage === 'MELODY') {
      partial = <Melody startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={melody.detune} changeWave={this.changeWave} />
    } else if (this.state.currentPage === 'RESULTS') {
      partial = <Results results={this.state.searchResults} setUrl={this.setUrl} />
    } else if (this.state.currentPage === 'CHORDS') {
      partial = <Chords startClickHandler={this.startClickHandler} stopClickHandler={this.stopClickHandler}
                octaveHandler={this.octaveHandler} detune={chords.detune} changeWave={this.changeWave} />
    }

    if (this.state.loggedIn) {
      return (
        <div className='App'>
          <Nav handleClick={this.setPage}/>
          {partial}
          <button className="pure-button" onClick={this.handleSave}>SAVE</button>
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
