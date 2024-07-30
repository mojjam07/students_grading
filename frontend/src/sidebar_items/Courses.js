import React from 'react'
import '../styles/sidebar_items.css'

function Courses() {
    const courses = ['Course 1', 'Course 2', 'Course 3'];
  return (
    <div  className='profile_and_co'>
      <h2>Courses List</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  )
}

export default Courses