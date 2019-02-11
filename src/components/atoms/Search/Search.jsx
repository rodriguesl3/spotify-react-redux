import React from 'react';

import './Search.scss';

const Search = (props) => {
  const { isSearching, onIsSearching } = props;
  const updateSearchHandle = (e) => {
    const value = e.target.value;
    if (value.length > 5) {
      onIsSearching(!isSearching);
    }
  };

  return (
    <div className="searchContainer">
      <input type="text" className="form-control" onChange={updateSearchHandle} />
    </div>
  );
};

export default Search;
