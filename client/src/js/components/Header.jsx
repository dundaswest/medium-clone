import React from 'react';
import logo from '../medium-logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
      <img src= {logo}  className="mLogo" />
      <div className="header-title">Stories</div>
      <div className="clear"></div>
      <div >
        <span className="sign-in">Sign in /Sign up</span>
      </div>
      </div>
    )
  }
}

export default Header;
