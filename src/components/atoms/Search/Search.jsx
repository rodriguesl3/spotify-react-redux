import React from 'react';
import { GoThumbsup } from 'react-icons/go';
import { FaSpotify } from 'react-icons/fa';

import './Search.scss';
import { CustomCard } from '../CustomCard/CustomCard';

const Search = (props) => {
  const { searchResult, onSearchTracksArtists, } = props;
  const updateSearchHandle = (e) => {
    const value = e.target.value;
    if (value.length > 5) {
      onSearchTracksArtists(value);
    }
  };

  const renderCustomCard = item => (
    <div>
      <div className="row">
        <div className="col-12">
          <h5 className="card-title">{item.name}</h5>
          Popularity:
        </div>
        <div className="col-12">
          {/* <RatingStart ratingValue={item.popularity} /> */}
        </div>
      </div>
      <div className="row">
        <div className="card-text row">
          <p className="col-1">
            <GoThumbsup />
          </p>
          <p className="col-8">{item.followers.total}</p>
        </div>
        <button type="button" className="btn btn-success">
          More in
          <FaSpotify />
        </button>
      </div>
    </div>
  );
  return (
    <div className="searchContainer">
      <div className="row">
        <input type="text" className="form-control" onChange={updateSearchHandle} />
        <div className="row results">
          {searchResult && searchResult.artists.items.map(item => (
            <CustomCard
              key={item.id}
              image={item.images.length > 0 ? item.images[0].url : ''}
            >
              {renderCustomCard(item)}
            </CustomCard>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Search;
