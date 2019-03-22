import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../imgs/medium-logo.svg';
import logoutImg from '../imgs/logout.svg';
import writeImg from '../imgs/write.svg';
import readImg from '../imgs/open-book.svg';

const Header = (props) => {
  const { onClick } = props;
  return (
    <div className="header">
      <Link to="landing">
        <div className="logoWapper">
          <img src={logo} alt="Medium logo" className="mLogo" />
          <svg className="line">
            <path d="M1 29V1" stroke="#D5D5D5" strokeWidth=".5" fill="none" strokeLinecap="round" />
          </svg>
          <div className="header-title">Stories</div>
          <div className="clear" />
        </div>
      </Link>
      <div className="nav-bar">
        <Link to="login" className="nav-item" onClick={onClick}>
          <span id="test">
            <img src={logoutImg} alt="Medium logout" className="header-icon" />
          </span>
          <span>Logout</span>
        </Link>
        <Link to="write" className="nav-item">
          <img src={writeImg} alt="Medium write" className="header-icon" />
          <span>write</span>
        </Link>
        <Link to="list" className="nav-item">
          <img src={readImg} alt="Medium read" className="header-icon" />
          <span> Your stories</span>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
