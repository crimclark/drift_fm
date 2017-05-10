import Slider from 'rc-slider';
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import sampleInstrument from '../sample/SampleInstrument';
import './customSlider.css';

class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      value: value
    })
    sampleInstrument.set({detune: value });
    this.props.setSliderVal(value);
  }

  render() {
    return (
      <div className="custom-slider">
        {this.props.children}
        <Slider value={this.state.value} min={-2400} max={2400}
        onChange={this.onSliderChange} marks={{0: ''}} />
      </div>
    );
  }
}

export default CustomSlider
