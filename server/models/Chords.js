const mongoose = require('mongoose')

const ChordSchema = new mongoose.Schema({
  detune: Number,
  oscillator: {
    type: String
  }
}, {typeKey: '$type'});

module.exports = ChordSchema;
