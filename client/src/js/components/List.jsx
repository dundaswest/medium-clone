import React from 'react';
import axios from 'axios';
import Author from './Author';
import Header from '../redux/containers/Logout';
import ListItem from './ListItem';

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

  handleItemClick = (e) => {
    const title = e.currentTarget.getAttribute('value');
    console.log(e.currentTarget.getAttribute('value'));

    axios
      .get('/getStory', {
        params: {
          title,
        },
      })
      .then((response) => {
        console.log(response.data);
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
        {data.map(item => (
          <ListItem item={item} handleItemClick={this.handleItemClick} key={item.title} />
        ))}
      </div>
    );
  }
}

export default List;
