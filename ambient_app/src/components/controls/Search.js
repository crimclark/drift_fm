import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject('songStore')
@observer
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
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
    const { query } = this.state;
    this.searchFreesound(query);
  }

  setSearchResults(results) {
    this.props.songStore.setSearchResults(results);
  }

  searchFreesound(query){
    const token = process.env.REACT_APP_FREESOUND_TOKEN;
    const url = `https://www.freesound.org/apiv2/search/text/?query=${query}&fields=name,previews&token=${token}`;
    fetch(url)
      .then( res => res.json() )
      .then( res => {
        this.setSearchResults(res.results);
        this.props.history.push('/drift_fm/sample/search');
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={this.handleChange} placeholder="Search Freesound.org" />
          <button className="pure-button">Search</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Search);
