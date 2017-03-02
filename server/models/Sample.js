const mongoose = require('mongoose')

const SampleSchema = new mongoose.Schema({
  url: String,
  detune: Number
});

module.exports = SampleSchema;


