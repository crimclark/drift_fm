const mongoose = require('mongoose');
const SampleSchema = require('./Sample');
const MelodySchema = require('./Melody');
const ChordSchema = require('./Chords');

const SongSchema = new mongoose.Schema({
  user: String,
  sample: [SampleSchema],
  melody: [MelodySchema],
  chords: [ChordSchema]
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
