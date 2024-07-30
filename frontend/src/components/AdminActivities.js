import React from 'react';

function AdminActivities() {
  // Dummy data for administrator activities
  const activities = [
    { id: 1, description: 'Updated system policies', date: '2024-07-30' },
    { id: 2, description: 'Managed user accounts', date: '2024-07-28' },
    { id: 3, description: 'Scheduled system maintenance', date: '2024-07-27' },
  ];

  return (
    <div className="activities admin-activities">
      <h2>Administrator Activities</h2>
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

export default AdminActivities;
