// SearchBar.jsx
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import './SearchBar.css'; // Import the CSS

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search notes"
          value={value}
          onChange={onChange}
        />
        {value && (
          <IoMdClose className="clear-button" onClick={onClearSearch} />
        )}
        <FaMagnifyingGlass className="search-icon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
