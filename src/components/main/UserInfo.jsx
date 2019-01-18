import React from 'react'
import PropTypes from 'prop-types'
import './UserInfo.scss';

export const UserInfo = (props) => {
  const { spotifyUserInfo, userListening } = props;


  return (
    <div className="user-content">
      <h3>Welcome {spotifyUserInfo.display_name}</h3>
      {!spotifyUserInfo && <div>Loading</div>}
      {userListening &&
        <div>
          <h5>That you are listen now?</h5>

          <div className="card-player">
            <div className="row">
              <div className="col6">
                <div>
                  <img src={userListening.item.album.images[2].url} alt="" />
                </div>
              </div>
              <div className="col6">
                <p>
                  {userListening.device.name}
                </p>
                <p>
                  {userListening.device.type}
                </p>
                {userListening.is_playing ? "Playing" : "Stoped"}
                <span>{userListening.item.name}</span>
                <span>{userListening.item.popularity}</span>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

UserInfo.propTypes = {
  //userName: React.PropTypes.string,
  spotifyUserInfo: PropTypes.object,
}
