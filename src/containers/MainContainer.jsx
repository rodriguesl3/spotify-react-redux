import { connect } from 'react-redux'
import React, { Component } from 'react'

import { UserInfo } from '../components/main/UserInfo';
import { getUserInfo, followingArtist } from '../redux-flow/actions/main-actions';
import { withRouter } from 'react-router-dom'
import { SideBar } from '../components/main/SideBar';
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
        {this.props.spotifyUserInfo && this.props.followingArtist &&
          <div className="row">
            <div className="col-sm-3">
              <SideBar spotifyUserInfo={this.props.spotifyUserInfo}
                onGetFollowingArtist={this.props.onGetFollowingArtist} />
            </div>
            <div className="col-sm-8">
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
  followingArtist: state.userInformation.followingArtist
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetUserInfo: (history) => dispatch(getUserInfo(history)),
  onGetFollowingArtist: () => dispatch(followingArtist())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer))

