# Ambient Music Generator

## Technology Stack

- MERN Stack SPA
- Tone.js Web Audio API framework

## User Stories

- Users can login through Google oAuth.

- User has access to 3 instruments in Nav Bar: "Chords," "Melody" and "Sample," as well as a "Global" control to adjust master settings.  

- All instruments contain "Start" and "stop" buttons to pause or resume playback.

- User can click "save" to save settings of composition in database.

- User can click "browse" to view other users compositions.

### Chords

- User can select "number of chords" which will randomly select from 1 to
7 chords and play back each chord in a random sequence.

- User can select "sine", "square", or "sawtooth" waveforms for synth sound.

- User can pitch the chords up or down an octave.

### Melody

- User can select "number of notes" which will randomly select from 1 to
7 notes and play back each note in a random sequence.

- User can select "sine", "square", or "sawtooth" waveforms for synth sound.

- User can pitch the melody up or down an octave.

### Sample

- User can search freesound.org using the freesound API to load a sample.

- User can pitch sample independent of playback rate.

- User can change playback rate of sample.

- User can reverse sample.

### Global

- User can transpose entire composition.

- User can change global bpm.

- User can start or stop all instruments.


