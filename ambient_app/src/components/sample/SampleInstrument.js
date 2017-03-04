import Tone from 'tone';


let sample = "https://www.freesound.org/data/previews/135/135472_1050391-lq.mp3"

let sampleInstrument = new Tone.GrainPlayer(sample, function(){
  // sampleInstrument.reverse = true;
  sampleInstrument.grainSize = .1;
  sampleInstrument.overlap = .8;
  sampleInstrument.drift = .5;
  sampleInstrument.loop = true;
  // sampleInstrument.volume = -40;

  // sampleInstrument.detune = -1200;
}).toMaster();
sampleInstrument.set({volume: -40})

export default sampleInstrument;
