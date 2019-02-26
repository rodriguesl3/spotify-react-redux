/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line react/no-deprecated
import React from 'react';
import { MdClose } from 'react-icons/md/index';

import './SideBar.scss';
import { CustomCard } from '../../atoms/CustomCard/CustomCard';
import UserListen from '../../atoms/UserListen/UserListen';
import { imageUrl } from '../../../constants/index';


// eslint-disable-next-line import/prefer-default-export
const SideBar = ({
  spotifyUserInfo,
  showSideBar,
  onShowSideBar,
  userListening
}) => {
  const hideSideBarHandle = () => {
    onShowSideBar(false);
  };

  return (
    <div className={`row ${!showSideBar ? 'sideBarContent' : 'sideBarContent-full'}`}>
      <div className="col-12 userName">
        <button type="button" className="closeButton col-2 offset-9 " onClick={hideSideBarHandle}>
          <MdClose />
        </button>
        <img src={(spotifyUserInfo) ? (spotifyUserInfo.images[0].url) : (imageUrl)} alt="" className="imageProfile" />
        <p>{(spotifyUserInfo) && spotifyUserInfo.display_name}</p>
      </div>
      <div className="col-12">
        <CustomCard
          image={(userListening ? userListening.item.album.images[1].url : imageUrl)}
        >
          <UserListen userListening={userListening} />
        </CustomCard>
      </div>
    </div>
  );
};

export default SideBar;
