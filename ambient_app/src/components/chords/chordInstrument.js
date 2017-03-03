import Tone from 'tone';
import chordList from './chordList';
import delay from '../fx/delay';
import {randomVal, rates} from '../lib/random';

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomChord(randomIndex) {
  var i = randomIndex(chordList);
  return chordList[i];
}

var chordSynth = new Tone.PolySynth(8, Tone.Synth).chain(delay);
chordSynth.set({
    envelope : {
        attack : 2,
        release : 10
    },
    volume : -20
});

var chordPattern = new Tone.Event(function(rate){
  chordSynth.triggerAttackRelease(randomChord(randomIndex), '4n');
  chordPattern.playbackRate = randomVal(rates);
})

chordPattern.loop = true;

export { chordPattern, chordSynth };
