import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';

import { Link } from "react-router-dom";

import './navbar.scss';

export const NavBar = (props) => {

    const { brandName, onShowSideBar } = props;

    const showSideBarHandle = () => {
        onShowSideBar(true);
    }


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/login" className="linkContainer">
                    <div className="link">
                        {brandName}
                    </div>
                    <div className="link">
                        <img src={logo} alt="Brand Icon" className="App-logo" />
                    </div>
                </Link>
                <span onClick={showSideBarHandle} >Show Side bar</span>
            </nav>
        </div>
    )
}

NavBar.propTypes = {
    brandName: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
}