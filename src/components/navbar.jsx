import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';

import { Link } from "react-router-dom";

import './navbar.scss';

export const NavBar = (props) => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/login" className="linkContainer">
                <div className="link">
                            {props.brandName}
                        </div>
                        <div className="link">
                            <img src={logo} alt="Brand Icon" className="App-logo" />
                        </div>
                </Link>
            </nav>
        </div>
    )
}

NavBar.propTypes = {
    brandName: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
}