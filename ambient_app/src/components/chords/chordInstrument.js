import Tone from 'tone';
import chordList from './chordList';

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomChord(randomIndex) {
  var i = randomIndex(chordList);
  // console.log(chords[i]);
  return chordList[i];
}

var synth = new Tone.PolySynth(8, Tone.FMSynth).toMaster();

var chord = new Tone.Event(function(rate){
  synth.triggerAttackRelease(randomChord(randomIndex), "4n");
})

chord.loop = true;

export default chord;
