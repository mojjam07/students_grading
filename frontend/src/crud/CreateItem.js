import React, { useState } from 'react';

function CreateItem() {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Created item:', item);
    setItem('');
  };

  return (
    <div>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateItem;
