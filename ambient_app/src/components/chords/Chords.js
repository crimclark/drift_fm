import React, { Component } from 'react';
import InstrumentContainer from '../InstrumentContainer';
import Transpose from '../controls/Transpose';
import Waveform from '../controls/Waveform';
import { chordPattern } from './chordInstrument';

class Chords extends Component {

	render() {
	  const { handleSave, detuneHandler, startClickHandler, stopClickHandler, guest, changeWave } = this.props;

		return (
			<InstrumentContainer
        header='C H O R D S'
        color='#575F8B'
        pattern={chordPattern}
        startClickHandler={startClickHandler}
        stopClickHandler={stopClickHandler}
        handleSave={handleSave}
        guest={guest}
      >
          <Transpose
            detuneHandler={detuneHandler}
            synth='chords'
            plus={1200}
            minus={-1200}
          >
            Octave:
          </Transpose>
          <Waveform changeWave={changeWave} synth='chords' />

      </InstrumentContainer>
		)
	}
}

export default Chords;