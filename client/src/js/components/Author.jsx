import React from 'react';

import author from '../boy.svg';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Author">
        <img src={author} className="authorPic" />
        <div className="authorName">
Yedam Rachmaninoff
        </div>
        <div className="clear" />
        <span className="follow">
Follow
        </span>
        <div className="clear" />
      </div>
    );
  }
}

export default Author;
