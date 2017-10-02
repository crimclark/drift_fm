import React, { Component } from 'react';
import TransportButton from '../buttons/TransportButton';
import { inject } from 'mobx-react';

@inject('songStore')
class Transport extends Component {

  handleStart(pattern) {
    this.props.songStore.startPlayback(pattern);
  }

  handleStop(pattern) {
    this.props.songStore.stopPlayback(pattern);
  }

  render() {
    const { pattern, mode } = this.props;

    return (
      <div>
        <TransportButton handleClick={pattern => this.handleStart(pattern)} pattern={pattern} mode={mode} >
          START
        </TransportButton>
        <TransportButton handleClick={pattern => this.handleStop(pattern)} pattern={pattern} mode={mode} >
          STOP
        </TransportButton>
      </div>
    )
  }
}

export default Transport;
