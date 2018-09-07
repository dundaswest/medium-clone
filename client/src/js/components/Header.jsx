import React from "react";
import logo from "../medium-logo.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="header">
          <img src={logo} className="mLogo" />
          <div className="header-title">Stories</div>
          <div className="clear" />
          <div>
            <span className="sign-in">Sign in /Sign up</span>
            <div className="clear" />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Header;
