import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import author from '../imgs/boy.svg';

const ListItem = (props) => {
  const { item, handleItemClick } = props;

  return (
    <Link to={{ pathname: '/landing', state: { data: item } }}>
      <div
        role="link"
        className="ListItem"
        onClick={handleItemClick}
        onKeyDown={handleItemClick}
        value={item.title}
        tabIndex="0"
      >
        <div className="ListItemHeader">
          <img src={author} alt="small Author Name" className="authorPicSmall" />
          <div className="authorNameSmall">Chandler Bing</div>
          <div className="clear" />
        </div>
        <div className="titleSmall">{item.title}</div>
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
ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  handleItemClick: PropTypes.func.isRequired,
};
export default ListItem;
