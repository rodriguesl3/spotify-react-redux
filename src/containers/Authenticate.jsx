import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login  from '../components/Login';
import { submitCredentials, addCredentials } from '../redux-flow/actions/login-actions'

const mapStateToProps = (state) => ({
    username: state.authentication.username,
    password: state.authentication.password,
    spotifyAuth: state.authentication.spotifyAuth,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (credentials) => dispatch(submitCredentials(credentials)),
    onUpdateCredentials: (e) => {
        const { name, value } = e.target;
        dispatch(addCredentials({ name, value }))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
