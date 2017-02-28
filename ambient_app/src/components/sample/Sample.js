import React, { Component } from 'react';
import StartButton from '../buttons/StartButton';
import StopButton from '../buttons/StopButton';
import SearchButton from '../buttons/SearchButton';
import sampleInstrument from './SampleInstrument';

class Sample extends Component {
  constructor() {
    super()
    this.state = {
      samplePattern: sampleInstrument,
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchFreesound = this.searchFreesound.bind(this);
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

  searchFreesound(query){
    const token = 'YtAc01pBCxzzNZznWsSHQ2pvJ73M7dBH8kyQNyzs';
    const url = `http://www.freesound.org/apiv2/search/text/?query=${query}&fields=name,previews&token=${token}`;
    fetch(url).then( res => res.json() ).then( res => {
      this.props.setResults(res.results);
    })
  }

  render() {
    return (
      <div className="instrument">
        <h1>SAMPLE</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder="Search Freesound.org" />
            <button className="pure-button">Search</button>
          </form>
        </div>
        <StartButton startClickHandler={this.props.startClickHandler} pattern={this.state.samplePattern} />
        <StopButton stopClickHandler={this.props.stopClickHandler} pattern={this.state.samplePattern} />
      </div>
      )
  }
}

export default Sample;

// <SearchButton text={'Search'} />


