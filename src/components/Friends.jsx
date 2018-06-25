import React from 'react';
import FriendItem from './FriendItem';

function Friends() {
  let friendPlacement = {
    gridColumn: '3 / 4',
    gridRow: '1 / 2',
    border: '2px solid lightgray',
    padding: '10px 20px',
    margin: '10px',
  }
  return (
    <div style={friendPlacement}>
      <FriendItem />
    </div>
  );
}

export default Friends;
