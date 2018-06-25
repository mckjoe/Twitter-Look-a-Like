import React from 'react';
import ProfileTop from './ProfileTop';
import ProfileBottom from './ProfileBottom';

function Profile() {
  let profilePlacement = {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    border: '2px solid lightgray',
    margin: '10px',
    // position: 'relative',
  }
  return (
    <div style={profilePlacement}>
      <ProfileTop />
      <ProfileBottom />
    </div>
  );
}

export default Profile;
