import React from 'react';
import author from '../imgs/boy.svg';

const Footer = () => (
  <div className="footerDiv">
    <img src={author} alt="authorImg" id="footerImg" />
    <div id="footerTxt">
      <div id="written">
written by
      </div>

      <div id="authorName-footer">
Chandler Bing
      </div>
      <div>
        Philosophy, Literature, Food, Computer Science. Questions are underrated. Likes complexity
        but not that kind of complexity.
      </div>
    </div>
    <div className="clear" />
  </div>
);

export default Footer;
