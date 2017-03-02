const mongoose = require('mongoose')

const SampleSchema = new mongoose.Schema({
  url: String,
  detune: { type: Number, default: 0 },
  reverse: { type: Boolean, default: false }
});

module.exports = SampleSchema;


