import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Content } from '../components/main/Content';
import { getUserInfo } from '../redux-flow/actions/welcome-actions';
import { withRouter } from 'react-router-dom'
import { SideBar } from '../components/main/SideBar';





class MainContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentWillMount() {
    this.props.onGetUserInfo(this.props.history);
  }


  render() {
    return (

      <div>
        {this.props.spotifyUserInfo &&
          <div className="row">
            <div className="col-sm-4">
              <SideBar spotifyUserInfo={this.props.spotifyUserInfo} />
            </div>
            <div className="col-sm-8">
              <Content
                spotifyUserInfo={this.props.spotifyUserInfo}
              />
            </div>
          </div>

        }
        {
          !this.props.spotifyUserInfo &&
          <div>
            loading ...
          </div>
        }
      </div>

    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.userName === "Lucas",
  spotifyAuth: state.authentication.spotifyAuth,
  spotifyUserInfo: state.welcome.spotifyUserInfo,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetUserInfo: (history) => dispatch(getUserInfo(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer))

