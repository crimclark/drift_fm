import React, { Component } from 'react';
import InstrumentContainer from '../InstrumentContainer';
import Transpose from '../controls/Transpose';
import Waveform from '../controls/Waveform';
import { chordPattern } from './chordInstrument';

class Chords extends Component {

	render() {
	  const { handleSave, guest } = this.props;

		return (
			<InstrumentContainer
        header='C H O R D S'
        color='#575F8B'
        pattern={chordPattern}
        handleSave={handleSave}
        guest={guest}
      >
        <Transpose
          synth='chords'
          plus={1200}
          minus={-1200}
        >
          Octave:
        </Transpose>
        <Waveform synth='chords'/>
      </InstrumentContainer>
		)
	}
}

export default Chords;
