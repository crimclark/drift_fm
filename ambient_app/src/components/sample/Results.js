import React from 'react';
import './results.css';

const Results = ({ results, setUrl }) => {
  let samples;

  if (results) {
    samples = results.map( (res, i) => {
      const url = res.previews['preview-hq-mp3'];
      const { name } = res;
      return (
        <div className="sample" key={i}>
          <button className="pure-button" onClick={ () => {
          setUrl(url, name);
        }}>LOAD</button>{name}</div>
      );
    });
  }

  return (
    <div className="results">
      <h1>Search Results:</h1>
      <ul>
      {samples}
      </ul>
    </div>
  )
};

export default Results;
