const express = require('express');
const router = express.Router();
const Song = require( '../models/Song' );
const mongoose = require('mongoose')
      // .set('debug', true);

router.get('/songs', (req, res) => {
  Song.find( {}, (err, songs) => {
    if (err) {
      console.log (err);
    } else {
      console.log(songs[0]);
    }
    res.send(songs[0]);
  })
})

router.put('/save', (req, res) => {
  const { _id, sample } = req.body;
  Song.findByIdAndUpdate(_id, {sample: sample}, (err, song) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Song state saved!');
    }
  })
  res.send('saved');
})

module.exports = router;
