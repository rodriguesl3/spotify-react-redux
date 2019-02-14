import React from 'react';
import { GoThumbsup } from 'react-icons/go';
import { FaSpotify } from 'react-icons/fa';
import { MdClose } from 'react-icons/md/index';
import { RatingStart } from '../RatingStar/RatingStar';

import './Search.scss';
import { CustomCard } from '../CustomCard/CustomCard';

let intervalToSearch = null;

const Search = (props) => {
  const { onIsSearching, isSearching, searchResult, onSearchTracksArtists, } = props;

  const showSearchArtist = () => {
    onIsSearching(!isSearching);
  };
  const updateSearchHandle = (e) => {
    const value = e.target.value;

    if (intervalToSearch) {
      clearTimeout(intervalToSearch);
    }

    intervalToSearch = setTimeout(() => {
      onSearchTracksArtists(value);
    }, 1500);
  };

  const renderTracks = item => (
    <div>
      <div className="row">
        <div className="col-12">
          <h5 className="card-title">
            {item.name}
          </h5>
          Popularity:
        </div>
        <div className="col-12">
          <RatingStart ratingValue={item.popularity} />
        </div>
      </div>
      <div className="row">
        <button type="button" className="btn btn-success">
          More in
          <FaSpotify />
        </button>
      </div>
    </div>
  );

  const renderArtists = item => (
    <div>
      <div className="row">
        <div className="col-12">
          <h5 className="card-title">
            {item.name}
          </h5>
          Popularity:
        </div>
        <div className="col-12">
          <RatingStart ratingValue={item.popularity} />
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
      <div className="col-10">
        <span onClick={showSearchArtist} className="col-2 offset-10 closeButton">
          <MdClose />
        </span>
        <input type="text" className="form-control" onChange={updateSearchHandle} />
        <div className="row">
          <h3>Artists</h3>
          {searchResult && searchResult.artists.items.map(item => (
            <CustomCard
              key={item.id}
              image={item.images.length > 0 ? item.images[0].url : ''}
            >
              {renderArtists(item)}
            </CustomCard>
          ))}
          <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 1.1);' }} />
          <h3>Tracks</h3>
          {searchResult && searchResult.tracks.items.map(item => (
            <CustomCard
              key={item.id}
              image={item.album.images[0].url}
            >
              {renderTracks(item)}
            </CustomCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
