// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import { getItems } from '../services/api';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
