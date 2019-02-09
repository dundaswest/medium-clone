import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../medium-logo.svg';
import logoutImg from '../logout.svg';
import writeImg from '../write.svg';
import Spinner from './Spinner';

const Header = ({ isLoggedIn, onClick }) => (
  <div className="header">
    <div className="logoWapper">
      <img src={logo} alt="Medium logo" className="mLogo" />
      <svg className="line">
        <path d="M1 29V1" stroke="#D5D5D5" strokeWidth=".5" fill="none" strokeLinecap="round" />
      </svg>
      <div className="header-title">
Stories
      </div>
      <div className="clear" />
    </div>

    <div className="nav-bar">
      <Link to="login" className="log-out" onClick={onClick}>
        <img src={logoutImg} alt="Medium logout" className="logoutImg" />
        Logout
      </Link>
      <Link to="write" className="write">
        <img src={writeImg} alt="Medium write" className="writeImg" />
        write
      </Link>
      <div className="clear" />
    </div>
  </div>
);
export default Header;
