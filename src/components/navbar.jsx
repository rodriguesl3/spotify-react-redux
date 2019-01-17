import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';

import { Link } from "react-router-dom";
import { MdPerson } from 'react-icons/md/index';

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
                    <div className="link col-6">
                        {brandName}
                    </div>
                    <div className="link col-6">
                        <img src={logo} alt="Brand Icon" className="App-logo" />
                    </div>
                </Link>
                <span onClick={showSideBarHandle} className="profileIcon" >
                <MdPerson size={30}/></span>
            </nav>
        </div>
    )
}

NavBar.propTypes = {
    brandName: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
}