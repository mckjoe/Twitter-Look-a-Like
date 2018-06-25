import React from 'react';

function Search() {
  let divStyle = {
    display: 'flex',
    width: '30%',
  }

  let pStyles = {
    border: '2px solid skyblue',
    padding: '5px 15px',
    marginLeft: '10px',
    borderRadius: '20px',
    width: '25%',
    alignSelf: 'flex-end',
  }

  let pStylesWide = {
    border: '2px solid skyblue',
    padding: '5px 15px',
    marginLeft: '10px',
    borderRadius: '20px',
    width: '70%',
    alignSelf: 'flex-end',
  }

  return (
    <div style={divStyle}>
      <p style={pStylesWide}>Search</p>
      <p style={pStyles}>Tweet</p>
    </div>
  );
}

export default Search;
