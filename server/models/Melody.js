const mongoose = require('mongoose')

const MelodySchema = new mongoose.Schema({
  detune: { type: Number, default: 0},
  oscillator: {
    type: { $type: String, default: 'sine' }
  }
}, {typeKey: '$type'});

module.exports = MelodySchema;
