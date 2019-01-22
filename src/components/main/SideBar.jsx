/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { MdClose } from 'react-icons/md/index';

import './SideBar.scss';

const imageUrl = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjY0q2jsMffAhXCvJAKHXo0B68QjRx6BAgBEAU&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FAnonymous&psig=AOvVaw0LvWcw8Dbz2hlIjV2raw_r&ust=1546253220121470';


// eslint-disable-next-line import/prefer-default-export
export const SideBar = (props) => {
  const { spotifyUserInfo, showSideBar, onShowSideBar } = props;

  const hideSideBarHandle = () => {
    onShowSideBar(false);
  };

  return (
    <div className={`row ${!showSideBar ? 'sideBarContent' : 'sideBarContent-full'}`}>
      <div className="col-12 userName">
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span onClick={hideSideBarHandle} className="col-2 offset-9 closeButton">
          <MdClose />
        </span>
        <img src={(spotifyUserInfo) ? (spotifyUserInfo.images[0].url) : (imageUrl)} alt="" className="imageProfile" />
        <p>{spotifyUserInfo.display_name}</p>
      </div>
    </div>
  );
};

// SideBar.propTypes = {
//     spotifyUserInfo: PropTypes.object.isRequired,
// }
