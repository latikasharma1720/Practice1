// src/components/FilterableList.jsx
import React, { useState } from 'react';

const itemList = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
];

function FilterableList() {
  const [filterText, setFilterText] = useState('');

  const filteredItems = itemList.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h2>Filterable Fruit List</h2>
      <input
        type="text"
        placeholder="Filter fruits..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterableList;
