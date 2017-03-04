import React, { Component } from 'react';
import Transport from '../controls/Transport';
import sampleInstrument from './SampleInstrument';
import './sampler.css';
import CustomSlider from '../buttons/CustomSlider';

class Sample extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchFreesound = this.searchFreesound.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const query = this.state.query;
    this.searchFreesound(query);
  }

  handleClick() {
    let reverse;
    if (sampleInstrument.reverse) {
      reverse = false;
    } else {
      reverse = true;
    }
    sampleInstrument.set({ reverse: reverse });
    this.props.setReverse(reverse)
  }

  searchFreesound(query){

    // prod

    // const token = process.env.REACT_APP_FREESOUND_TOKEN;

    // dev
    const token = 'YtAc01pBCxzzNZznWsSHQ2pvJ73M7dBH8kyQNyzs';

    const url = `https://www.freesound.org/apiv2/search/text/?query=${query}&fields=name,previews&token=${token}`;
    fetch(url).then( res => res.json() ).then( res => {
      this.props.setResults(res.results);
    })
  }

  render() {
    const {detuneVal, setSliderVal, startClickHandler, stopClickHandler} = this.props;

    return (
      <div className="instrument sampler">
        <h1>S A M P L E</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder="Search Freesound.org" />
            <button className="pure-button">Search</button>
          </form>
        </div>
        <div>
          <button className="pure-button" onClick={this.handleClick}>Reverse</button>
        </div>
        <div>
          Speed: <CustomSlider value={detuneVal} setSliderVal={setSliderVal} />
        </div>
        <Transport handleStart={startClickHandler} handleStop={stopClickHandler}
        pattern={sampleInstrument} startText='START' stopText='STOP' mode='one' />
      </div>
      )
  }
}

export default Sample;


