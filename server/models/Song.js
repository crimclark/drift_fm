const mongoose = require('mongoose');
const SampleSchema = require('./Sample');

const SongSchema = new mongoose.Schema({
  sample: [SampleSchema]
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
