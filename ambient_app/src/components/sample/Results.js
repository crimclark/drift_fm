import React, { Component } from 'react';
import './results.css';

import { inject, observer } from 'mobx-react';

@inject('songStore')
@observer
class Results extends Component {

  setSample(url, name) {
    this.props.songStore.setSample(url, name);
  }

  renderResults() {
    const { songStore: { searchResults } } = this.props;

    if (searchResults && searchResults.length) {
      return searchResults.map( (res, i) => {
        const url = res.previews['preview-hq-mp3'];
        const { name } = res;
        return (
          <div className="sample" key={i}>
            <button
              className="pure-button"
              onClick={ () => this.setSample(url, name) }
            >
              LOAD
            </button>
            {name}
          </div>
        );
      });
    } else {
      return "NO RESULTS FOUND";
    }
  }

  render() {
    return (
      <div className="results">
        <h1>Search Results:</h1>
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    )
  }
}

export default Results;
