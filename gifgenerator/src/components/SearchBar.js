import React from "react";

const SearchBar = ({ ref, handleKeyDown, searchGifs }) => {
  return (
    <div>
      <input
        ref={ref}
        placeholder="Search GIFs"
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button onClick={() => searchGifs(true)} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
