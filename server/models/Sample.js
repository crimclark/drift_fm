const mongoose = require('mongoose')

const SampleSchema = new mongoose.Schema({
  url: String,
  detune: Number
});

// const Sample = mongoose.model('Sample', SampleSchema);

module.exports = SampleSchema;


