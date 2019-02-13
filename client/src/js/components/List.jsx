import React from 'react';
import Author from './Author';
import Header from './Header';
import ListItem from './ListItem';

const axios = require('axios');

class List extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    axios
      .get('/getList')
      .then((res) => {
        console.log('axios', res.data);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="ListName">
        <Header />
        <Author />
        <div className="ListItemContainer" />
        {data.map(item => <ListItem item={item} key={item.title} />)}
      </div>
    );
  }
}

export default List;
