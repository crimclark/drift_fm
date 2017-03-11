import React, { Component } from 'react';
import Transport from '../controls/Transport';
import sampleInstrument from './SampleInstrument';
import './sampler.css';
import CustomSlider from '../buttons/CustomSlider';
import Search from '../controls/Search';
import Reverse from '../controls/Reverse';

class Sample extends Component {

  render() {
    const {detuneVal, setSliderVal, startClickHandler, stopClickHandler} = this.props;

    return (
      <div className="instrument sampler">
        <h1>S A M P L E</h1>

        <Search setResults={this.props.setResults} />

        <Reverse setReverse={this.props.setReverse}/>

        <CustomSlider value={detuneVal} setSliderVal={setSliderVal} >
          Speed:
        </CustomSlider>

        <Transport handleStart={startClickHandler} handleStop={stopClickHandler}
        pattern={sampleInstrument} />
      </div>
      )
  }
}

export default Sample;


