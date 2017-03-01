import Slider from 'rc-slider';
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';

class CustomSlider extends Component {
  constructor() {
    super();
    this.state = {
      value: 50
    }
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  onSliderChange(value) {
    console.log(value);
    this.setState({
      value: value
    })
  }

  onAfterChange(value) {
    // console.log(value)
  }

  render() {
    return (
      <Slider value={this.state.value}
        onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
        marks={{50: ''}}
      />
    );
  }

}

export default CustomSlider
