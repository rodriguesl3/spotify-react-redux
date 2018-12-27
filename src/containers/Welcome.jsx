import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Welcome } from '../components/Welcome';

const mapStateToProps = (state, ownProps) => ({
    isAuthenticated: state.userName === "Lucas"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpdateList: () => dispatch("..put action here")
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
