const mongoose = require('mongoose')

const ChordSchema = new mongoose.Schema({
  detune: { type: Number, default: 0},
  oscillator: {
    type: { $type: String, default: 'sine' }
  }
}, {typeKey: '$type'});

module.exports = ChordSchema;
