import React, { useState } from 'react';
 
const SearchFilter = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
 
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSearch(query);
  };
 
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
 
  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };
 
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text" className='searchtop'
        placeholder="Search by title"
        value={query}
        onChange={handleQueryChange}
      />
      <button type="submit" className='submittop' style={{backgroundColor:"lightblue"}}>Search</button>
      {/* <select onChange={handleFilter} value={selectedCategory}>
        <option value="">Select Category</option>
     
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select> */}
    </form>
  );
};
 
export default SearchFilter;