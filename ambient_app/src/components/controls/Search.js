import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

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

  searchFreesound(query){
    const { history, setResults } = this.props;
    const token = process.env.REACT_APP_FREESOUND_TOKEN;
    const url = `https://www.freesound.org/apiv2/search/text/?query=${query}&fields=name,previews&token=${token}`;
    fetch(url).then( res => res.json() ).then( res => {
      setResults(res.results);
      history.push('/sample/search', { searchResults: res.results });
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="Search Freesound.org" />
          <button className="pure-button">Search</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Search);
