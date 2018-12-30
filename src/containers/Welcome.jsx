import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Welcome } from '../components/Welcome';
import { getUserInfo } from '../redux-flow/actions/welcome-actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => ({
    isAuthenticated: state.userName === "Lucas",
    spotifyAuth: state.authentication.spotifyAuth,
    spotifyUserInfo: state.welcome.spotifyUserInfo,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetUserInfo: (history) => dispatch(getUserInfo(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Welcome))
