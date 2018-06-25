import React from 'react';

function FriendItem() {
  let feedBody = {
    display: 'flex',
    flexDirection: 'column',
  }
  let itemStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '0 15px',
  }
  let imageStyle = {
    width: '60px',
    height: '60px',
  }
  let pStyle = {
    marginLeft: '10px',
  }
  let btnStyle = {
    padding: '10px 20px',
    backgroundColor: '#379EDE',
    color: 'white',
  }

  return (
    <div style={feedBody}>
      <div style={itemStyle}>
        <img style={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYwPy09AYw2Y8uZkUynJ6WbWqiWCj1XS0rjWZix5AyVRxKFW0Ow" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <button style={btnStyle}>Button</button>
        </div>
      </div>
      <div style={itemStyle}>
        <img style={imageStyle} src="https://format-com-cld-res.cloudinary.com/image/private/s--Xyyo3hb0--/c_crop,h_2003,w_2003,x_0,y_174/c_fill,g_center,h_380,w_380/a_auto,fl_keep_iptc.progressive,q_95,r_max/v1/d12f9ad72cefa4f52539c4f3c66ad52e/_HZD7380.png" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <button style={btnStyle}>Button</button>
        </div>
      </div>
      <div style={itemStyle}>
        <img style={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2-BcPKAc4u3n2apGxWKyHrlb7vR8DxygEzldW5igZHb62GLw" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <button style={btnStyle}>Button</button>
        </div>
      </div>
      <div style={itemStyle}>
        <img style={imageStyle} src="https://cdn.shopify.com/s/files/1/2227/3393/products/suga_1024x1024@2x.gif?v=1511056376" />
        <div style={pStyle}>
          <h5>Lorem Ipsum</h5>
          <button style={btnStyle}>Button</button>
        </div>
      </div>
    </div>
  );
}

export default FriendItem;
