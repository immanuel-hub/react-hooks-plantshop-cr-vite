import React from "react";

// Calls onSearch with the current input value to filter plants
function Search({ onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
