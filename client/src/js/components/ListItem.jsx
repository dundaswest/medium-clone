import React from 'react';
import { Link } from 'react-router-dom';
import author from '../boy.svg';

const ListItem = (props) => {
  const { item, handleItemClick } = props;

  return (
    <Link to={{ pathname: '/landing', state: { data: item } }}>
      <div className="ListItem" onClick={handleItemClick} value={item.title}>
        <div className="ListItemHeader">
          <img src={author} alt="small Author Name" className="authorPicSmall" />
          <div className="authorNameSmall">
Chandler Bing
          </div>
          <div className="clear" />
        </div>
        <div className="titleSmall">
          {item.title}
        </div>
        <div className="textSmall">
          {' '}
          {item.title.length > 90
            ? `${item.text.slice(0, 138)}...`
            : `${item.text.slice(0, 250)}...`}
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
