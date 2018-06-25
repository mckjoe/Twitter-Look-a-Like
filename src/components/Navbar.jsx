import React from 'react';

function Navbar() {
  let navbarStyles = {
    display: 'flex',
  }
  let pStyles = {
    border: '1px solid lightgray',
    padding: '15px 25px',
    fontFamily: 'sans-serif', 

  }
  return (
    <div style={navbarStyles}>
      <p style={pStyles}>Home</p>
      <p style={pStyles}>Notifications</p>
      <p style={pStyles}>Messages</p>
    </div>
  );
}

export default Navbar;
