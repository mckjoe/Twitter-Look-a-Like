import React from 'react';

function FeedItem() {
  let feedBody = {
    display: 'flex',
    flexDirection: 'column',
  }
  let itemStyle = {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid lightgray',
    margin: '0 15px',
  }
  let imageStyle = {
    width: '80px',
    height: '80px',
  }
  let pStyle = {
    marginLeft: '10px',
  }

  return (
    <div style={feedBody}>
      <div style={itemStyle}>
        <img style={imageStyle} src="http://motogp.hondaracingcorporation.com/wp-content/uploads/sites/3/2014/12/5888b480ed2ec1.03517481.png" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
      <div style={itemStyle}>
        <img style={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7KWhryzVEYJrWeNlwGfa5Pm4fxGLggymYF3DUuMoZzuUKL6M" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
      <div style={itemStyle}>
        <img style={imageStyle} src="http://thehallbrothers.com/wp-content/uploads/2015/12/Alasdair-profile-round.png" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
      <div style={itemStyle}>
        <img style={imageStyle} src="http://karthikraj.net/assets/karthik_profile_round.png" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
