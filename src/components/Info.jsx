import React from 'react';

function Info() {
  let infoStyle = {
    border: '2px solid lightgray',
    padding: '10px 20px',
    margin: '10px',
  }
  return (
    <div style={infoStyle}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default Info;
