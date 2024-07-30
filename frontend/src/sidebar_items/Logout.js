import React from 'react';
import '../styles/sidebar_items.css'

function Logout() {

  return (
    <div  className='profile_and_co'>
      <h1>Logout</h1>
      <p>You are about to log out. Click the button below to confirm.</p>
      <button>Logout</button>
    </div>
  );
}

export default Logout;
