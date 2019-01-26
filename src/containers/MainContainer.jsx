import { connect } from 'react-redux';
import React, { Component } from 'react';

import './MainContainer.scss';
import { withRouter } from 'react-router-dom';

import { UserInfo } from '../components/main/UserInfo';
import { getUserInfo, followingArtist, getUserListenNow } from '../redux-flow/actions/main-actions';
import { showHideSideBar } from '../redux-flow/actions/sidebar-actions';

import { SideBar } from '../components/main/SideBar';
import NavBar from '../components/navbar';
import FollowingArtists from '../components/main/FollowingArtist';

const mapStateToProps = state => ({
  isAuthenticated: state.userName === 'Lucas',
  spotifyAuth: state.authentication.spotifyAuth,
  spotifyUserInfo: state.userInformation.spotifyUserInfo,
  userFollowingArtist: state.userInformation.followingArtist,
  userListening: state.userInformation.userListening,
  sideBar: state.showSideBar,
});

const mapDispatchToProps = dispatch => ({
  onGetUserInfo: historyParam => dispatch(getUserInfo(historyParam)),
  onGetFollowingArtist: () => dispatch(followingArtist()),
  onShowSideBar: showHide => dispatch(showHideSideBar(showHide)),
  onUserListening: () => dispatch(getUserListenNow()),
});

class MainContainer extends Component {
  componentDidMount() {
    const {
      onGetFollowingArtist, onGetUserInfo, history,
      onUserListening, sideBar, onShowSideBar,
      userFollowingArtist, spotifyUserInfo, userListening,
    } = this.props;

    onGetFollowingArtist();
    onGetUserInfo(history);
    onUserListening();
  }

  render() {
    return (
      <div>
        <NavBar
          brandName="N2L"
          showSideBar={this.sideBar}
          onShowSideBar={this.onShowSideBar}
        />
        {this.spotifyUserInfo && followingArtist
          && (
            <div className="row">
              <div className="col-10 col-sm-4">
                <SideBar
                  spotifyUserInfo={this.spotifyUserInfo}
                  showSideBar={this.sideBar.showSideBar}
                  onShowSideBar={this.onShowSideBar}
                />
              </div>
              <div className="col-10 col-sm-8" style={{ marginLeft: '20px' }}>
                <UserInfo
                  spotifyUserInfo={this.spotifyUserInfo}
                  userListening={this.userListening}
                />
                <FollowingArtists followingArtist={this.userFollowingArtist} />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer));
