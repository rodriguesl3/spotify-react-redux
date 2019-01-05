import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SideBar.scss';

const imageUrl = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjY0q2jsMffAhXCvJAKHXo0B68QjRx6BAgBEAU&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FAnonymous&psig=AOvVaw0LvWcw8Dbz2hlIjV2raw_r&ust=1546253220121470"


export const SideBar = (props) => {
    const { spotifyUserInfo, onGetFollowingArtist } = props;

    const GetFollowingArtistHandle = () => {
        onGetFollowingArtist();
    }

    return (
        <div className="container">
            <div className="row sideBarContent">
                <img src={(spotifyUserInfo)
                    ? (spotifyUserInfo.images[0].url)
                    : (imageUrl)} alt=""
                    className="col-sm-5 imageProfile"
                />

                <div className="col-sm-12 userName">
                    {spotifyUserInfo.display_name}
                </div>
                <div className="row sideBarList">
                    <div className="col-sm-6" onClick={GetFollowingArtistHandle}>Artists Following</div>
                </div>
            </div>
        </div>
    )
}

// SideBar.propTypes = {
//     spotifyUserInfo: PropTypes.object.isRequired,
// }