import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Tone from 'tone';
import './App.css';
import Results from './components/sample/Results';
import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import sampleInstrument from './components/sample/SampleInstrument';
import { melodySynth } from './components/melody/melodyInstrument';
import { chordSynth } from './components/chords/chordInstrument';

import Welcome from './components/welcome/Welcome';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Global from './components/Global';

class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      guest: false,
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
        reverse: false,
        name: 'Spring Birds Loop'
      }
    };
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
    this.setGuest = this.setGuest.bind(this);
    this.setReverse = this.setReverse.bind(this);

    this.root = '/drift_fm';
  }

  componentDidMount() {
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start('+0.5');
  }

  setLoggedIn(song) {
    const { chords, melody, sample, _id } = song;
    this.setState({
      loggedIn: true,
      _id: _id,
      sample: sample[0],
      chords: chords[0],
      melody: melody[0]
    });
  }

  setGuest() {
    this.setState({
      guest: true,
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

  setResults(results) {
    this.setState({
      searchResults: results
    });
  }

  setBuffer(url) {
    const buffer = new Tone.Buffer(url, () => {
      sampleInstrument.set({'buffer': buffer})
    });
  }

  setUrl(url, name) {
    this.setState({
      sample: {
        ...this.state.sample,
        url: url,
        name: name
      }
    });
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
    switch (synth) {
      case 'melody':
        this.setState({
          melody: {
            ...this.state.melody,
            oscillator: {type: wave}
          }
        })
        break;
      case 'chords':
        this.setState({
          chords: {
            ...this.state.chords,
            oscillator: {type: wave}
          }
        });
        break;
      default:
        break;
    }
  }

  startClickHandler(...patterns) {
    for (var i = 0; i < patterns.length; i++) {
      patterns[i].start('+0.5');
    }
  }

  stopClickHandler(...patterns) {
    for (var i = 0; i < patterns.length; i++) {
      if (patterns[i].state === 'started') patterns[i].stop('+0.5');
    }
  }

  detuneHandler(val, synth) {
    const {melody, chords, sample} = this.state;
    switch(synth) {
      case 'melody':
        this.setState({
          melody: {
            ...melody,
            detune: melody.detune + val
          }
        });
        break;
      case 'chords':
        this.setState({
          chords: {
            ...chords,
            detune: chords.detune + val
          }
        });
        break;
      case 'all':
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
        });
        break;
      default:
        break;
    }
  }

  handleSave() {
    const server = process.env.REACT_APP_SERVER;

    // prod route
    const route = `${server}/save`;

    // dev route
    // const route = '/save';

    fetch(route, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    const { sample, chords, melody, searchResults, loggedIn, guest } = this.state;

    const sharedProps = {
      startClickHandler: this.startClickHandler,
      stopClickHandler: this.stopClickHandler,
      handleSave: this.handleSave,
      detuneHandler: this.detuneHandler,
      changeWave: this.changeWave,
      guest
    };

    //initialize instruments to settings from state
    //todo: refactor sample model to allow `SampleInstrument.set(sample)`
    melodySynth.set(melody);
    chordSynth.set(chords);
    sampleInstrument.set({
      detune: sample.detune
    });
    this.setBuffer(sample.url);

    return (
      <Router>
        <div className='App'>
          <Nav showNav={loggedIn || guest}/>
          <Route render={({ location }) =>
            <TransitionGroup>
              <CSSTransition
                classNames="fade"
                timeout={300}
                key={location.key}
              >
                <Switch location={location}>
                  <Route exact path={"/"} children={() => (
                    loggedIn || guest ? (
                      <Welcome />
                    ) : (
                      <Login setLoggedIn={this.setLoggedIn} setGuest={this.setGuest} />
                    )
                  )}/>
                  <Route exact path={`${this.root}/chords`} children={() =>
                    <Chords {...sharedProps} />}
                  />
                  <Route exact path={`${this.root}/melody`} children={() =>
                    <Melody {...sharedProps} />}
                  />
                  <Route exact path={`${this.root}/sample`} children={() =>
                    <Sample
                      setResults={this.setResults}
                      setReverse={this.setReverse}
                      setSliderVal={this.setSliderVal}
                      sample={sample}
                      {...sharedProps}
                    />}
                  />
                  <Route exact path={`${this.root}/global`} children={() =>
                    <Global {...sharedProps} />}
                  />
                  <Route exact path={`${this.root}/sample/search`} children={() =>
                    <Results results={searchResults} setUrl={this.setUrl} />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          } />
        </div>
      </Router>
    );
  }
}

export default App;
