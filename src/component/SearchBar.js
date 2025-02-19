// SearchBar.js
import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for products"
        className="search-bar"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
