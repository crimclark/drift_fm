const mongoose = require('mongoose');
const SampleSchema = require('./Sample');
const MelodySchema = require('./Melody');
const ChordSchema = require('./Chords');

const SongSchema = new mongoose.Schema({
  user: String,
  melody: { type: [MelodySchema], default: [MelodySchema] },
  chords: { type: [ChordSchema], default: [ChordSchema] },
  sample: { type: [SampleSchema], default: [SampleSchema] }
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
