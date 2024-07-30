import React from 'react';

function Sidebar({ setSelectedOperation }) {
  return (
    <div className="sidebar">
      <h3>Operations</h3>
      <ul>
        <li onClick={() => setSelectedOperation('create')}>Create</li>
        <li onClick={() => setSelectedOperation('read')}>Read</li>
        <li onClick={() => setSelectedOperation('update')}>Update</li>
        <li onClick={() => setSelectedOperation('delete')}>Delete</li>
      </ul>
    </div>
  );
}

export default Sidebar;
