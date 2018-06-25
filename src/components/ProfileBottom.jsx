import React from 'react';

function ProfileBottom(){
  let ulStyles = {
    display: 'flex',
    listStyle: 'none',
    fontSize: '1.1vw',
    justifyContent: 'space-between',
    transform: 'translate(-20px, 70px)',
  }
  let pStyle = {
    textAlign: 'right',
    marginRight: '8px',
  }
  return (
    <div>
      <p style={pStyle}><strong>Kellie A. Corrigan</strong></p>
      <ul style={ulStyles}>
        <li>TWEETS</li>
        <li>FOLLOWING</li>
        <li>FOLLOWERS</li>
      </ul>
    </div>
  );
}
export default ProfileBottom;
