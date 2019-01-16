import React from 'react'


import './SideBar.scss';

const imageUrl = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjY0q2jsMffAhXCvJAKHXo0B68QjRx6BAgBEAU&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FAnonymous&psig=AOvVaw0LvWcw8Dbz2hlIjV2raw_r&ust=1546253220121470"


export const SideBar = (props) => {
    const { spotifyUserInfo, showSideBar, onShowSideBar } = props;

    const hideSideBarHandle = () => {
        onShowSideBar(false);
    }

    return (
        <div>
            {showSideBar &&
                <div className="row sideBarContent">
                    <button onClick={hideSideBarHandle}>close</button>
                    <div className="col-12 userName">
                        <img src={(spotifyUserInfo)
                            ? (spotifyUserInfo.images[0].url)
                            : (imageUrl)} alt=""
                            className="imageProfile"
                        />
                        <p>{spotifyUserInfo.display_name}</p>
                    </div>
                </div>
            }
        </div>
    )
}

// SideBar.propTypes = {
//     spotifyUserInfo: PropTypes.object.isRequired,
// }