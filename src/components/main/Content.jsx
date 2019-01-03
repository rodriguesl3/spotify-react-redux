import React from 'react'
import PropTypes from 'prop-types'


export const Content = (props) => {
  const { spotifyUserInfo } = props;

  // const getUserInfoHandle = () => {

  // }


  return (
    <div>
      Welcome
      spotify User Information
      {JSON.stringify(spotifyUserInfo)}

      {/* <button onClick={getUserInfoHandle}> buscar Informação</button> */}
    </div>
  )
}

Content.propTypes = {
  //userName: React.PropTypes.string,
  spotifyUserInfo: PropTypes.object,
}
