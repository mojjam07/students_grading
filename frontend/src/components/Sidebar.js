import React from 'react';
import '../styles/sidebar.css';

function Sidebar({ setSelectedOption }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setSelectedOption('home')}><a href="#">Home</a></li>
        <li onClick={() => setSelectedOption('profile')}><a href="#">Profile</a></li>
        <li onClick={() => setSelectedOption('courses')}><a href="#">Courses</a></li>
        <li onClick={() => setSelectedOption('grades')}><a href="#">Grades</a></li>
        <li onClick={() => setSelectedOption('reports')}><a href="#">Reports</a></li>
        <li onClick={() => setSelectedOption('settings')}><a href="#">Settings</a></li>
        <li onClick={() => setSelectedOption('logout')}><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
