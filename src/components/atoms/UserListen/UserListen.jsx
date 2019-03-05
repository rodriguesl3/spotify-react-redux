import React from 'react';

import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

import { RatingStart } from '../RatingStar/RatingStar';
import LoaderHOC from '../Loading/LoaderHOC';

const UserListen = ({ userListening, onChangeMusic }) => {
  const changeMusicHandle = (changeParam) => {
    onChangeMusic(changeParam);
  };

  return (
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
        <div className="col-9">
          <span>{userListening.item && userListening.item.name}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className='previous' onClick={changeMusicHandle.bind(this, 'previous')}>
            <MdSkipPrevious />
          </p>
        </div>
        <div className="col-3">
          <p>
            {!userListening.is_playing ? <FaRegPlayCircle /> : <FaRegPauseCircle />}
          </p>
        </div>
        <div className="col-3">
          <p className='next' onClick={changeMusicHandle.bind(this, 'next')}>
            <MdSkipNext />
          </p>
        </div>
      </div>
      <span><RatingStart ratingValue={userListening.item && userListening.item.popularity} /></span>
    </div>
  )
};


export default UserListen;
