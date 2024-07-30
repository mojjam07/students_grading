import React from 'react';

function ReadItems() {
  // Dummy data for example
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h2>Read Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReadItems;
