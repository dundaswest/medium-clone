import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../medium-logo.svg';
import logoutImg from '../logout.svg';
import writeImg from '../write.svg';
import readImg from '../open-book.svg';

const Header = ({ isLoggedIn, onClick }) => (
  <div className="header">
    <Link to="landing">
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
    </Link>
    <div className="nav-bar">
      <Link to="login" className="log-out" onClick={onClick}>
        <img src={logoutImg} alt="Medium logout" className="logoutImg" />
        Logout
      </Link>
      <Link to="write" className="write">
        <img src={writeImg} alt="Medium write" className="writeImg" />
        write
      </Link>
      <Link to="list" className="list">
        <img src={readImg} alt="Medium read" className="readImg" />
        Your stories
      </Link>
      <div className="clear" />
    </div>
  </div>
);
export default Header;
