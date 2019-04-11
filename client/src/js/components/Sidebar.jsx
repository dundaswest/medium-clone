import React from 'react';
import { PropTypes } from 'prop-types';
import clap from '../imgs/clap.svg';
import twitter from '../imgs/twitter.svg';
import bookmark from '../imgs/bookmark-white.svg';
import facebook from '../imgs/facebook.svg';

const Sidebar = ({ clapNum, onClick }) => (
  <div className="sideBar">
    <div>
      <div id="clapNum">{clapNum}</div>
      <img src={clap} alt="clapPic" className="sidebar-icon" id="clap" onClick={onClick} />
    </div>
    <div>
      <img src={twitter} alt="twitterPic" className="sidebar-icon" id="twitter" />
    </div>
    <div>
      <img src={bookmark} alt="bookmarkPic" className="sidebar-icon" />
    </div>
    <div>
      <img src={facebook} alt="facebookPic" className="sidebar-icon" />
    </div>
  </div>
);

Sidebar.propTypes = {
  clapNum: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Sidebar;
