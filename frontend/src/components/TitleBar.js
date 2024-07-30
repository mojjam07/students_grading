import React from 'react';
import '../styles/titlebar.css';

function TitleBar() {
  return (
    // <div className="title-bar">
    //   <h1>Dashboard</h1>
    // </div>
    <div className="title-bar">
      <div className="logo">
          <img src="logo.png" alt="App Logo" />
      </div>
      <div className="app-title">
          <h1>Student Grading App</h1>
      </div>
      <div className="user-profile">
          <img src="user.png" alt="User Profile" />
          <span>Hello, [User]</span>
      </div>
    </div>
  );
}

export default TitleBar;