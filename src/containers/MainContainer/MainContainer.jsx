/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './MainContainer.scss';
import { withRouter } from 'react-router-dom';

import UserInfo from '../../components/main/UserInfo/UserInfo';
import { getUserInfo, followingArtist, getUserListenNow, isSearching, } from '../../redux-flow/actions/main-actions';
import { showHideSideBar } from '../../redux-flow/actions/sidebar-actions';

import SideBar from '../../components/main/SideBar/SideBar';
import NavBar from '../../components/atoms/NavBar/navbar';
import FollowingArtists from '../../components/main/FollowingArtists/FollowingArtists';

const mapStateToProps = state => ({
  spotifyAuth: state.authentication.spotifyAuth,
  spotifyUserInfo: state.userInformation.spotifyUserInfo,
  userFollowingArtist: state.userInformation.followingArtist,
  userListening: state.userInformation.userListening,
  sideBar: state.showSideBar,
  isSearching: state.userInformation.isSearching,
});

const mapDispatchToProps = dispatch => ({
  onGetUserInfo: history => dispatch(getUserInfo(history)),
  onGetFollowingArtist: () => dispatch(followingArtist()),
  onShowSideBar: showHide => dispatch(showHideSideBar(showHide)),
  onUserListening: () => dispatch(getUserListenNow()),
  onIsSearching: isVisible => dispatch(isSearching(isVisible)),
});

class MainContainer extends Component {
  componentDidMount() {
    this.props.onGetFollowingArtist();
    this.props.onGetUserInfo(this.props.history);
    this.props.onUserListening();
  }

  render() {
    return (
      <div>
        <NavBar
          brandName="N2L"
          showSideBar={this.props.sideBar}
          onShowSideBar={this.props.onShowSideBar}
          onIsSearching={this.props.onIsSearching}
          isSearching={this.props.isSearching}
        />
        <div className="row">
          <div className="col-10 col-sm-4">
            <SideBar
              spotifyUserInfo={this.props.spotifyUserInfo}
              showSideBar={this.props.sideBar.showSideBar}
              onShowSideBar={this.props.onShowSideBar}
              userListening={this.props.userListening}
            />
          </div>
          <div className="col-10 col-sm-8" style={{ marginLeft: '20px' }}>
            <UserInfo
              spotifyUserInfo={this.props.spotifyUserInfo}
              userListening={this.props.userListening}
            />
            <FollowingArtists followingArtist={this.props.userFollowingArtist} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer));
