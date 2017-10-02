import React, { Component } from 'react';
import Transport from './controls/Transport';
import SaveButton from './buttons/SaveButton';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class InstrumentContainer extends Component {

  render() {
    const { header, color, children, pattern, mode, handleSave, userStore: { guest } } = this.props;

    let saveButton;

    if (!guest) saveButton = <SaveButton handleSave={handleSave} />;
    
    return (
      <div className="instrument" style={{backgroundColor: color}}>
        <h1>{header}</h1>

        {children}

        <Transport
          pattern={pattern}
          mode={mode}
        />
        {saveButton}
      </div>
    )
  }
}


export default InstrumentContainer;
