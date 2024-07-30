import React from 'react';
import '../styles/maincontent.css';

function MainContent() {
  return (
    // <div className="main-content">
    //   <h2>Welcome to the Dashboard</h2>
    //   <p>This is the main content area.</p>
    // </div>
    <div className="main-content">
        <header>
            <h1>Welcome, [User]</h1>
        </header>
        <section className="cards">
            <div className="card">
                <h3>Total Students</h3>
                <p>120</p>
            </div>
            <div className="card">
                <h3>Total Courses</h3>
                <p>8</p>
            </div>
            <div className="card">
                <h3>Average Grade</h3>
                <p>B+</p>
            </div>
        </section>
        <section className="data">
            <h2>Recent Grades</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Math 101</td>
                        <td>A</td>
                        <td>2024-07-25</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>History 201</td>
                        <td>B+</td>
                        <td>2024-07-24</td>
                    </tr>
                    <tr>
                        <td>Jim Brown</td>
                        <td>Science 301</td>
                        <td>B</td>
                        <td>2024-07-23</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
  );
}

export default MainContent;
