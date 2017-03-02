const mongoose = require('mongoose')

const MelodySchema = new mongoose.Schema({
  detune: Number,
  oscillator: {
    type: String
  }
}, {typeKey: '$type'});

module.exports = MelodySchema;
