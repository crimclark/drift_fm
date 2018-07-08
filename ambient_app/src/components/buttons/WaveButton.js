import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('songStore')
class WaveButton extends Component {
  render() {
    const {
      img,
      alt,
      wave,
      synth,
      songStore
    } = this.props;

    return (
      <span className="wave-button">
        <img
          src={img}
          alt={alt}
          onClick={() => songStore.changeWave(wave, synth) }
          className="pure-button"
          id="wave-button"
        />
    </span>
    )
  }
}

export default WaveButton;
