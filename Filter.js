import React, { useState } from 'react';
 
const categories = ['Category 1', 'Category 2', 'Category 3']; // Replace with actual categories
 
const Filter = ({ handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
 
  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    handleFilter(category);
  };
 
  return (
    <div>
       <select value={selectedCategory} onChange={handleChange}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
 
export default Filter;
 
 