import React from 'react';

import author from '../boy.svg';

const Author = () => (
  <div className="Author">
    <img src={author} className="authorPic" />
    <div className="authorText">
      <div className="authorName">
Yedam Rachmaninoff
      </div>
      <div className="clear" />
      <div className="author-discription">
        Front end developer @Lorem ipsum. Justo laoreet morbi amet.
      </div>
    </div>
    {/*
    <span className="follow">
Follow
    </span>
    */}
    <div className="clear" />
  </div>
);

export default Author;
