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
  const { _id, sample, melody, chords } = req.body;
  Song.findByIdAndUpdate(_id, {sample: sample, melody: melody, chords: chords}, (err, song) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Song state saved!');
      res.send('saved');
    }
  })
})

router.post('/songs', (req, res) => {
  const {token, email, name} = req.body;
  Song.findOne({user: email}, (err, song) =>{
    if (!song) {
      const song = new Song({
        user: email
      });
      song.save()
          .then( song => {
            console.log('created new song');
            res.send(song);
          });
    } else {
      console.log('song found!');
      res.send(song);
    }
  })
})

module.exports = router;
