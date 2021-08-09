import React from 'react';

/**
 * A simple search component
 */
const SearchBar = (props) => {
  return (
    <form role="search" onSubmit={e => e.preventDefault()}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Enter your search term"
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleInputChange}
          value={props.value}
        />
      </div>
    </form>
  );
};

export default SearchBar;
