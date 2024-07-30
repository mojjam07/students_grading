import React from 'react';
import InstructorActivities from '../components/InstructorActivities';
import AdminActivities from '../components/AdminActivities';
import '../styles/ActivityPage.css';

function ActivityPage() {
  return (
    <div className="activity-page">
      <h1>Activities Dashboard</h1>
      <div className="activities-section">
        <InstructorActivities />
        <AdminActivities />
      </div>
    </div>
  );
}

export default ActivityPage;
