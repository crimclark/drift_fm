import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

@inject('songStore')
@observer
class Reverse extends Component {
  handleClick() {
    this.props.songStore.toggleReverse();
  }

  render() {
    return (
      <div>
        <button
          className="pure-button"
          onClick={() => this.handleClick()}
        >
          Reverse
        </button>
      </div>
    )
  }
}

export default Reverse;
