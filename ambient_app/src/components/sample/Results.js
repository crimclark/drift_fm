import React from 'react';
import './results.css';

const Results = ({results, setUrl}) => {
    const samples = results.map( res => {
      const url = res.previews['preview-hq-mp3'];
      return (
        <div className="sample" key={res.name}>
          <button className="pure-button" onClick={ () => {
          setUrl(url);
        }}>LOAD</button>{res.name}</div>
        );
    })

  return (
    <div className="results">
      <h1>Search Results:</h1>
      <ul>
      {samples}
      </ul>
    </div>

    )
}

export default Results;
