import Tone from 'tone';

let sample = "https://www.freesound.org/data/previews/135/135472_1050391-lq.mp3"

let sampleInstrument = new Tone.GrainPlayer(sample, function(){
  sampleInstrument.grainSize = .2;
  sampleInstrument.overlap = .4;
  sampleInstrument.drift = .2;
  sampleInstrument.loop = true;
}).toMaster();
sampleInstrument.set({volume: -40});

export default sampleInstrument;

