import React from 'react';
// import PropTypes from 'prop-types';
import './FollowingArtists.scss';
import { GoThumbsup } from 'react-icons/go';
import { FaSpotify } from 'react-icons/fa';
import { RatingStart } from '../../atoms/RatingStar/RatingStar';
import { CustomCard } from '../../atoms/CustomCard/CustomCard';

import LoaderHOC from '../../atoms/Loading/LoadingHOC';


const FollowingArtists = (props) => {
  const { followingArtist } = props;

  const renderCustomCard = item => (
    <div>
      <div className="row">
        <div className="col-12">
          <h5 className="card-title">{item.name}</h5>
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
    <div>
      <h3 className="title">That is your idol list...</h3>
      <div className="row">
        {followingArtist.artists
          .items
          .map(item => (
            <CustomCard
              key={item.id}
              image={item.images[2].url}
              content={renderCustomCard(item)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LoaderHOC('followingArtist', FollowingArtists);
