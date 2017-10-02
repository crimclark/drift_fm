import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('songStore')
class SaveButton extends Component {
  render() {
    return (
      <div className="save-button">
        <button
          className="pure-button"
          onClick={() => this.props.songStore.saveSong()}
        >
          SAVE
        </button>
      </div>
    )
  }
}

export default SaveButton;
