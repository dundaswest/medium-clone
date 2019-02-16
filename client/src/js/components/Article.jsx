/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import Text from './Text';
import edit from '../imgs/edit.svg';
import binImg from '../imgs/binImg.svg';

const axios = require('axios');

class Article extends React.Component {
  state = {
    title: 'Intellegat scriptorem',
    subtitle: 'Ne sea legimus accusata aliquando, est iudico iisque ei.',
    text: '',
    id: '',
  };

  componentDidMount() {
    const { articleData } = this.props;
    console.log(articleData);
    if (articleData) {
      const sub = articleData.data.text.slice(10, 65);
      this.setState({
        title: articleData.data.title,
        subtitle: sub,
        text: articleData.data.text,
        id: articleData.data._id,
      });
    }
  }

  handleDeleteClick = () => {
    const { id } = this.state;
    axios
      .delete(`/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      title, subtitle, text, id,
    } = this.state;
    return (
      <div className="Article">
        <div className="ArticleTitle">
          {title}
        </div>
        <div className="ArticleSubTitle">
          {subtitle}
        </div>
        {text ? (
          <div className="TextDiv">
            <div className="ArticleText">
              {text}
            </div>
          </div>
        ) : (
          <Text />
        )}
        <div id="edit-Img-section">
          <Link to={{ pathname: '/edit', state: { data: this.state } }}>
            <img src={edit} alt="edit-Img" className="article-svg" />
          </Link>
          <img
            src={binImg}
            alt="binImg-Img"
            className="article-svg"
            onClick={this.handleDeleteClick}
          />
        </div>
      </div>
    );
  }
}

export default Article;
