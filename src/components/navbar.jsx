import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';

export const NavBar = (props) => {

    return (
        <div>
            
            <nav className="navbar navbar-dark bg-dark">
                {/* <a href="/login" className="navbar-brand">
                    {props.brandName}
                    <img src={logo} alt="Brand Icon" />
                </a> */}
            </nav>
        </div>
    )
}

NavBar.propTypes = {
    brandName: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
}