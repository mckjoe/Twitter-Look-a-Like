import React from 'react';
import FeedItem from './FeedItem';

function Feed() {
  let feedPlacement = {
    gridColumn: '2 / 3',
    gridRow: '1 / 3',
    border: '2px solid lightgray',
    margin: '10px',
  }

  let feedDiv = {
    backgroundColor: 'lightblue',
    height: '80px',
    padding: '5px 20px',
  }

  let feedContent = {
    border: '2px solid #379EDE',
    color: '#379EDE',
    backgroundColor: 'white',
    padding: '10px',
  }

  return (
    <div style={feedPlacement}>
      <div style={feedDiv}>
        <p style={feedContent}>What's happening?</p>
      </div>
      <FeedItem />
    </div>
  );
}

export default Feed;
