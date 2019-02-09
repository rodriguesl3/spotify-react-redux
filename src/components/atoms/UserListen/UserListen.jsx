import React from 'react';

import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import { RatingStart } from '../RatingStar/RatingStar';

const UserListen = ({ userListening }) => (
  <div>
    <span>
      Device: {userListening.device.name}
    </span>
    <p>
      Type: {userListening.device.type}
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

export default UserListen;
