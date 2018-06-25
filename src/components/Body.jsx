import React from 'react';
import Profile from './Profile';
import Info from './Info';
import Feed from './Feed';
import Friends from './Friends';

function Body() {
  let bodyStyles = {
    display: 'grid',
    gridTemplateColumns: '30% 40% 30%',
    gridTemplateRows: '1fr 1fr',
    fontFamily: 'helvetica',
    color: 'gray',
    maxWidth: '1300px',
    minWidth: '630px',
  }
  return (
    <div style={bodyStyles}>
      <Profile />
      <Info />
      <Feed />
      <Friends />
    </div>
  );
}

export default Body;
