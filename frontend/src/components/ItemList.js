import React, { useState, useEffect } from 'react';
import { getData } from '../services/api';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getData().then(data => setItems(data));
    }, []);

    return (
        <div>
            <h1>API call on : Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
