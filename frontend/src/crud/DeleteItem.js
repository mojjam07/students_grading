import React, { useState } from 'react';

function DeleteItem() {
  const [item, setItem] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('Deleted item:', item);
    setItem('');
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteItem;
