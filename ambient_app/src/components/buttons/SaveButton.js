import React, { Component } from 'react';

class SaveButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleSave();
  }

  render() {
    return (
      <div className="save-button">
        <button className="pure-button" onClick={this.handleClick}>SAVE</button>
      </div>
    )
  }
}

export default SaveButton;
