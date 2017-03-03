import Slider from 'rc-slider';
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';

class BPMSlider extends Component {
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
  }

  render() {
    return (
      <Slider className="custom-slider" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.onSliderChange} marks={{55: ''}} />
    );
  }

}

export default BPMSlider
