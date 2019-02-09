import React from 'react';

import './Search.scss';

const Search = () => {
  const updateSearchHandle = () => { };

  return (
    <div className="searchContainer">
      <input type="text" className="form-control" onChange={updateSearchHandle()} />
    </div>
  );
};

export default Search;
