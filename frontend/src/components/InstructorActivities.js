import React from 'react';

function InstructorActivities() {
  // Dummy data for instructor activities
  const activities = [
    { id: 1, description: 'Reviewed Assignment 1', date: '2024-07-30' },
    { id: 2, description: 'Published new course materials', date: '2024-07-28' },
    { id: 3, description: 'Held office hours', date: '2024-07-27' },
  ];

  return (
    <div className="activities instructor-activities">
      <h2>Instructor Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.description}</p>
            <span>{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstructorActivities;
