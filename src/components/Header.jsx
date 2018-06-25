import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

function Header() {
  let headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid lightgray',
    fontFamily: 'sans-serif',
    color: 'gray',
  }
  return (
    <div style={headerStyle}>
      <Navbar />
      <Search />
    </div>
  );
}

export default Header;
