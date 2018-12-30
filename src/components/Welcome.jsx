import React from 'react'
import PropTypes from 'prop-types'
const imageUrl = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjY0q2jsMffAhXCvJAKHXo0B68QjRx6BAgBEAU&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FAnonymous&psig=AOvVaw0LvWcw8Dbz2hlIjV2raw_r&ust=1546253220121470"


export const Welcome = (props) => {
  const { history } = props;

  const getUserInfoHandle = () => {
    props.onGetUserInfo(history);
  }


  return (
    <div>
      Welcome
      spotify User Information
      {JSON.stringify(props.spotifyUserInfo)}
      <img src={props.spotifyUserInfo
        ? (props.spotifyUserInfo.images[0].url)
        : (imageUrl)} alt="" />



      <button onClick={getUserInfoHandle}> buscar Informação</button>

    </div>
  )
}

Welcome.propTypes = {
  //userName: React.PropTypes.string,
}
