import React from 'react';
import author from '../boy.svg';

const ListItem = props => (
  <div className="ListItem">
    <div className="ListItemHeader">
      <img src={author} alt="small Author Name" className="authorPicSmall" />
      <div className="authorNameSmall">
Ben Robertson
      </div>
      <div className="clear" />
    </div>
    <div className="titleSmall">
      {props.item.title}
    </div>
    <div className="textSmall">
      {' '}
      {props.item.title.length > 90
        ? `${props.item.text.slice(0, 138)}...`
        : `${props.item.text.slice(0, 250)}...`}
    </div>
  </div>
);

export default ListItem;
