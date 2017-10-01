import React, { Component } from 'react';
import InstrumentContainer from '../InstrumentContainer';
import Search from '../controls/Search';
import Reverse from '../controls/Reverse';
import CustomSlider from '../buttons/CustomSlider';
import SampleName from '../sample/SampleName';
import sampleInstrument from './SampleInstrument';

class Sample extends Component {

  render() {
    const { setResults, setReverse, sample, setSliderVal, handleSave, startClickHandler, stopClickHandler, guest } = this.props;

    return (
      <InstrumentContainer
        header='S A M P L E'
        color='#CBB274'
        pattern={sampleInstrument}
        startClickHandler={startClickHandler}
        stopClickHandler={stopClickHandler}
        handleSave={handleSave}
        guest={guest}
      >
        <Search setResults={setResults}/>
        <SampleName name={sample.name} />
        <Reverse setReverse={setReverse}/>
        <CustomSlider value={sample.detune} setSliderVal={setSliderVal} >
          Speed:
        </CustomSlider>
      </InstrumentContainer>
    )
  }
}

export default Sample;