import React from 'react';
import author from '../boy.svg';

const Footer = () => (
  <div className="footerDiv">
    <img src={author} alt="authorImg" id="footerImg" />
    <div id="footerTxt">
      <div id="written">
written by
      </div>

      <div id="authorName-footer">
Yedam Rachmaninoff
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
