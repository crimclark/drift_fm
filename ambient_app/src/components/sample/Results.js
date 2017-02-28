import React from 'react';

const Results = ({results}) => {
    const samples = results.map( res => {
      const url = res.previews['preview-hq-mp3'];
      return <li key={res.name}>{res.name} {url}</li>;
    })

  return (
    <div className="instrument">
      <h1>Search Results:</h1>
      <ul>
      {samples}
      </ul>
    </div>

    )
}

export default Results;
