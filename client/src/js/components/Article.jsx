import React from 'react';
import Text from './Text';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ArticleTitle">
How to Sing like yedam
        </div>
        <Text />
      </div>
    );
  }
}

export default Author;
