import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss';

import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

import { CustomCard } from '../../atoms/CustomCard/CustomCard';
import { RatingStart } from '../../atoms/RatingStar/RatingStar';

const UserInfo = (props) => {
  const { spotifyUserInfo, userListening } = props;
  const renderCardHandle = () => (
    <div>
      <span>
        Device:
        {userListening.device.name}
      </span>
      <p>
        Type:
        {userListening.device.type}
      </p>
      <div className="row">
        <div className="col-1">
          <p>
            {userListening.is_playing ? <FaRegPlayCircle /> : <FaRegPauseCircle />}
          </p>
        </div>
        <div className="col-9">
          <span>{userListening.item.name}</span>
        </div>
      </div>
      <span><RatingStart ratingValue={userListening.item.popularity} /></span>
    </div>
  );

  return (
    <div className="user-content">
      <h3>
        Welcome
        {spotifyUserInfo.display_name}
      </h3>
      {!spotifyUserInfo && <div>Loading</div>}
      {userListening
        && (
          <div>
            <h5>That you are listen now?</h5>
            <CustomCard
              image={userListening.item.album.images[1].url}
              content={renderCardHandle()}
            />
          </div>
        )
      }
    </div>
  );
};

UserInfo.propTypes = {
  userListening: PropTypes.object,
  spotifyUserInfo: PropTypes.object,
}


export default UserInfo;
