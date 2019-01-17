import { connect } from 'react-redux'
import React, { Component } from 'react'

import { UserInfo } from '../components/main/UserInfo';
import { getUserInfo, followingArtist } from '../redux-flow/actions/main-actions';
import { showHideSideBar } from '../redux-flow/actions/sidebar-actions';
import { withRouter } from 'react-router-dom'
import { SideBar } from '../components/main/SideBar';
import { NavBar } from '../components/navbar'
import { FollowingArtists } from '../components/main/FollowingArtist';






class MainContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }


  componentDidMount() {
    this.props.onGetFollowingArtist();
    this.props.onGetUserInfo(this.props.history);

  }


  render() {
    return (

      <div>
        <NavBar brandName="N2L"
          showSideBar={this.props.sideBar}
          onShowSideBar={this.props.onShowSideBar} />

        {this.props.spotifyUserInfo && this.props.followingArtist &&
          <div className="row">
            <div className="col-10 col-sm-4">
              <SideBar spotifyUserInfo={this.props.spotifyUserInfo}
                showSideBar={this.props.sideBar.showSideBar}
                onShowSideBar={this.props.onShowSideBar} />
            </div>
            <div className="col-10 col-sm-8" style={{marginLeft: '20px'}}>
              <UserInfo
                spotifyUserInfo={this.props.spotifyUserInfo}
              />
              <FollowingArtists followingArtist={this.props.followingArtist} />
            </div>
          </div>
        }
      </div>

    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.userName === "Lucas",
  spotifyAuth: state.authentication.spotifyAuth,
  spotifyUserInfo: state.userInformation.spotifyUserInfo,
  followingArtist: state.userInformation.followingArtist,
  sideBar: state.showSideBar
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetUserInfo: (history) => dispatch(getUserInfo(history)),
  onGetFollowingArtist: () => dispatch(followingArtist()),
  onShowSideBar: (showHide) => dispatch(showHideSideBar(showHide)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer))

