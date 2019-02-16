import React from 'react';

import author from '../imgs/boy.svg';

const Author = () => (
  <div className="Author">
    <img src={author} alt="authorPic" className="authorPic" />
    <div className="authorText">
      <div className="authorName">
Chandler Bing
      </div>
      <div className="clear" />
      <div className="author-discription">
        Front end developer @Lorem ipsum. Justo laoreet morbi amet.
      </div>
    </div>
    <div className="clear" />
  </div>
);

export default Author;
