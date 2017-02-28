import Tone from 'tone';

let delay = new Tone.PingPongDelay({
  'delayTime': '8n',
  'feedback': 0.7,
  'wet': 0.4
}).toMaster();

export default delay;
