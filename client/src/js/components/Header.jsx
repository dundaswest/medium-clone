import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../medium-logo.svg';
import Spinner from './Spinner';

const Wrapper = styled.div`
  padding: 4em;
  background: #c7efcf;
`;
/*
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="header">
          <img src={logo} className="mLogo" />
          <Spinner />
          <div className="header-title">
Stories
          </div>
          <div className="clear" />
          <div>
            <span className="sign-in">
Sign in /Sign up
            </span>
            <div className="clear" />
          </div>
        </div>
      </Wrapper>
    );
  }
}
*/
const Header = () => (
  <Wrapper>
    <div className="header">
      <img src={logo} alt="Medium logo" className="mLogo" />
      <Spinner />
      <div className="header-title">
Stories
      </div>
      <div className="clear" />
      <div>
        <Link to="login" className="sign-in">
          Login
        </Link>
        <Link to="write" className="write">
          write
        </Link>
        <div className="clear" />
      </div>
    </div>
  </Wrapper>
);
export default Header;
