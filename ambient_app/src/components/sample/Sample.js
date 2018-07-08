import React, { Component } from 'react';
import InstrumentContainer from '../InstrumentContainer';
import Search from '../controls/Search';
import Reverse from '../controls/Reverse';
import CustomSlider from '../buttons/CustomSlider';
import SampleName from '../sample/SampleName';
import sampleInstrument from './SampleInstrument';

import { inject, observer } from 'mobx-react';

@inject('songStore')
@observer
class Sample extends Component {

  render() {
    const { handleSave, songStore: { sample } } = this.props;

    return (
      <InstrumentContainer
        header='S A M P L E'
        color='#CBB274'
        pattern={sampleInstrument}
        handleSave={handleSave}
      >
        <Search/>
        <SampleName name={sample.name} />
        <Reverse />
        <CustomSlider>
          Speed:
        </CustomSlider>
      </InstrumentContainer>
    )
  }
}

export default Sample;