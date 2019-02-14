import React from 'react';
import { number } from 'prop-types';
import clap from '../clap.svg';
import twitter from '../twitter.svg';
import bookmark from '../bookmark-white.svg';
import facebook from '../facebook.svg';

const Sidebar = ({ clap_num, onClick }) => (
  <div className="sideBar">
    <div>
      <div id="clapNum">
        {clap_num}
      </div>
      <img src={clap} alt="clapPic" id="clap" onClick={onClick} />
    </div>
    <div>
      <img src={twitter} alt="twitterPic" id="twitter" />
    </div>
    <div>
      <img src={bookmark} alt="bookmarkPic" id="bookmark" />
    </div>
    <div>
      <img src={facebook} alt="facebookPic" id="facebook" />
    </div>
  </div>
);

Sidebar.propTypes = {
  clap_num: number.isRequired,
};
export default Sidebar;
