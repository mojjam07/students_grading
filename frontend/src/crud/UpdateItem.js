import React, { useState } from 'react';

function UpdateItem() {
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(`Updated ${item} to ${newItem}`);
    setItem('');
    setNewItem('');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Current Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateItem;
