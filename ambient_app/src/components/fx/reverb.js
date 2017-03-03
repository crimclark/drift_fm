import Tone from 'tone';

const reverb = new Tone.JCReverb(0.7).toMaster();

export default reverb;
