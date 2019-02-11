import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss';

import { imageUrl } from '../../../constants/index';
import { CustomCard } from '../../atoms/CustomCard/CustomCard';
import LoaderHOC from '../../atoms/Loading/LoaderHOC';
import UserListen from '../../atoms/UserListen/UserListen';

const UserInfo = (props) => {
  const { spotifyUserInfo, userListening } = props;
  return (
    <div className="user-content">
      <h3>
        Welcome
        {spotifyUserInfo && spotifyUserInfo.display_name}
      </h3>
      <div>
        <h5>That you are listen now?</h5>
        <CustomCard
          image={userListening.item.album ? userListening.item.album.images[1].url : imageUrl}
        >
          <UserListen
            userListening={userListening}
          />
        </CustomCard>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userListening: PropTypes.object,
  spotifyUserInfo: PropTypes.object,
};


export default LoaderHOC('userListening', UserInfo);
