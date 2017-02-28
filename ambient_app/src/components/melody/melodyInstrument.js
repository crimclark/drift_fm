import Tone from 'tone';

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
  'volume' : -30
}).toMaster();

let melodyPattern = new Tone.Pattern(function(time, note){
  melodySynth.triggerAttackRelease(note, 0.6);
  // pattern.playbackRate = randomRate(randomIndex) * 4;
}, ["C5", "D5", "E5", "F5", "G5", "A5", "B5"], "random");

export default melodyPattern;
