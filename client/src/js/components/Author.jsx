import React from 'react';
import yedom from '../Yedam.jpg';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Author">
        <img src= {yedom}  className="authorPic" />
        <div className="authorName">
          Yedam Rachmaninoff
        </div>
        <div className="clear"></div>
        <span className="follow">Follow</span>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Author;
