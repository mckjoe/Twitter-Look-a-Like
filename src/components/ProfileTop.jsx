import React from 'react';

function ProfileTop(){
  let profilebackgroundStyles = {
    height: '50%',
    width: '100%',
    backgroundColor: '#379EDE',
    position: 'relative',
  }
  let imageStyle = {
    width: '50%',
    position: 'absolute',
    top: '55%',
  }
  return (
    <div style={profilebackgroundStyles}>
      <img style={imageStyle} src="https://2.bp.blogspot.com/-bqOFeMBEICM/WLA0Czsk18I/AAAAAAAAFnQ/9sfpqnI4pKA_LYl87A0eqJgA8q2mDXOogCLcB/s640/Indian-Politician-Prime-Minister-Narendra-Modi-HD-Wallpapers-Pics-300x300.png" />
    </div>
  );
}
export default ProfileTop;
