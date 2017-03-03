import Tone from 'tone';
import delay from '../fx/delay';
import {randomVal, rates} from '../lib/random';


var melodySynth = new Tone.MonoSynth({
  'oscillator' : {
    'type' : 'sine'
  },
  'envelope' : {
  'attack' : .01,
  'decay' : 1,
  'sustain' : 0,
  'release' : 3
 },
  filterEnvelope:{
  attack:0,
  decay:1,
  sustain:1,
  release:1,
  baseFrequency:1000,
  octaves:7,
  exponent:0
  },
  volume: -20
}).chain(delay);



let melodyPattern = new Tone.Pattern(function(time, note){
  melodySynth.triggerAttackRelease(note, 0.5);
  melodyPattern.playbackRate = randomVal(rates);
}, ["C5", "D5", "E5", "F5", "G5", "A5", "B5"], "random");

export { melodySynth, melodyPattern };


