import React from 'react';
import yedom from '../Yedam.jpg';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footerDiv">
        <img src={yedom} id="footerImg" />
        <div id="footerTxt">
          <div id="written">written by</div>

          <div id="authorName-footer">Yedam Rachmaninoff</div>
          <div>
            Philosophy, Literature, Food, Computer Science. Questions are underrated. Likes complexity but not that kind
            of complexity.
          </div>
          <div className="followBtn">follow</div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

export default Footer;
