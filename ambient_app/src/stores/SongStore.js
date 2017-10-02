import { observable, action, autorun } from 'mobx';
import sampleInstrument from 'src/components/sample/SampleInstrument';
import { melodySynth } from 'src/components/melody/melodyInstrument';
import { chordSynth } from 'src/components/chords/chordInstrument';
import Tone from 'tone';

class SongStore {
  constructor() {
    autorun(() => {
      melodySynth.set(this.melody);
    });

    autorun(() => {
      chordSynth.set(this.chords);
    });

    autorun(() => {
      sampleInstrument.set({
        detune: this.sample.detune,
        reverse: this.sample.reverse
      });
    });

    autorun(() => {
      const url = this.sample.url;
      const buffer = new Tone.Buffer(url, () => {
        sampleInstrument.set({ buffer })
      });
    });
  };

  @observable chords = {
    detune: 0,
    oscillator: {
      type: 'sine'
    }
  };

  @observable melody = {
    detune: 0,
    oscillator: {
      type: 'sine'
    }
  };

  @observable sample = {
    detune: 0,
    url: null,
    reverse: false,
    name: 'Spring Birds Loop'
  };

  @observable song = {
    chords: this.chords,
    melody: this.melody,
    sample: this.sample
  };

  @observable searchResults = [];

  @action setSearchResults(results) {
    this.searchResults = results;
  }

  @action detune(val, synth) {
    if (synth === 'all') {
      this.melody.detune += val;
      this.chords.detune += val;
      this.sample.detune += val;
    } else {
      this[synth]['detune'] += val;
    }
  }

  @action changeWave(wave, synth) {
    this[synth]['oscillator'] = { type: wave }
  }

  @action setSliderVal(val) {
    this.sample.detune = val;
  }

  @action toggleReverse() {
    this.sample.reverse = this.sample.reverse ? false : true;
  }

  @action setSample(url, name) {
    this.sample.url = url;
    this.sample.name = name;
  }

  saveSong() {
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
      body: JSON.stringify(this.song)
    })
  }

  startPlayback(...patterns) {
    patterns.forEach( pattern => {
      pattern.start('+0.5');
    });
  }

  stopPlayback(...patterns) {
    patterns.forEach( pattern => {
      if (pattern.state === 'started') pattern.stop('+0.5');
    });
  }
}

export default SongStore;
