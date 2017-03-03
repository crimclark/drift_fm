import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import Transpose from '../controls/Transpose';
import { melodyPattern } from './melodyInstrument';
import WaveButton from '../buttons/WaveButton';
import sinewave from '../../sinewave.png'
import sawtooth from '../../sawtooth.png'
import squarewave from '../../squarewave.png'
import './melody.css';


class Melody extends Component {
  constructor() {
    super()
    this.state = {
      melodyPattern: melodyPattern
    }
  }

  render() {

    return (
      <div className="instrument melody">
        <h1>M E L O D Y</h1>
        <div>
        Octave:
          <Transpose detuneHandler={this.props.detuneHandler} synth='melody' plus={1200} minus={-1200} />
        </div>
        <div>
        Waveform:
          <WaveButton wave='sine' synth='melody' changeWave={this.props.changeWave} img={sinewave} alt='sine' />
          <WaveButton wave='square' synth='melody' changeWave={this.props.changeWave} img={squarewave} alt='square' />
          <WaveButton wave='sawtooth' synth='melody' changeWave={this.props.changeWave} img={sawtooth} alt='saw' />
        </div>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.melodyPattern} >
          Start
        </StartButton>
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.melodyPattern} />
      </div>
      )
  }
}

export default Melody;
