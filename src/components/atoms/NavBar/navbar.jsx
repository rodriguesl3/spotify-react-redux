/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdSearch } from 'react-icons/md/index';
import logo from '../../../logo.svg';
import './navbar.scss';
// import Search from '../Search/Search';

const NavBar = (props) => {
  const { brandName, onShowSideBar } = props;
  const showSideBarHandle = () => { onShowSideBar(true); };

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
        <span onClick={showSideBarHandle} className="profileIcon" role="presentation">
          <MdPerson size={30} />
        </span>
        <MdSearch />
      </nav>
    </div>
  );
};

export default NavBar;
