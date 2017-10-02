import Slider from 'rc-slider';
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './customSlider.css';
import { inject, observer } from 'mobx-react';

@inject('songStore')
@observer
class CustomSlider extends Component {
  onSliderChange(value) {
    this.props.songStore.setSliderVal(value);
  }

  render() {
    const { songStore: { sample }, children } = this.props;

    return (
      <div className="custom-slider">
        {children}
        <Slider value={sample.detune} min={-2400} max={2400}
        onChange={(val) => this.onSliderChange(val)} marks={{0: ''}} />
      </div>
    );
  }
}

export default CustomSlider
