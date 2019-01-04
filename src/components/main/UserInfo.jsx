import React from 'react'
import PropTypes from 'prop-types'


export const UserInfo = (props) => {
  const { spotifyUserInfo } = props;

  // const getUserInfoHandle = () => {

  // }


  return (
    <div>
      Welcome
      spotify User Information
      {!spotifyUserInfo && <div>Loading</div>}
      {/* {spotifyUserInfo && JSON.stringify(spotifyUserInfo)} */}


    </div>
  )
}

UserInfo.propTypes = {
  //userName: React.PropTypes.string,
  spotifyUserInfo: PropTypes.object,
}
