import React from 'react';
import '../styles/titlebar.css';

function TitleBar({title, image, username}) {
  return (
    // <div className="title-bar">
    //   <h1>Dashboard</h1>
    // </div>
    <div className="title-bar">
      <div className="logo">
          <img src="logo.png" alt="App Logo" />'
      </div>
      <div className="app-title">
          <h1>{title}</h1>
      </div>
      <div className="user-profile">
          {/* <img src="{image}" alt="User Profile" /> */}
          {image}
          <span>Hello!{username}</span>
      </div>
    </div>
  );
}

export default TitleBar;