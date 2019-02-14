import React from 'react';
import Text from './Text';

class Article extends React.Component {
  state = {
    title: 'Intellegat scriptorem',
    subtitle: 'Ne sea legimus accusata aliquando, est iudico iisque ei.',
    text: '',
  };

  componentDidMount() {
    const { articleData } = this.props;
    if (articleData) {
      const sub = articleData.data.text.slice(10, 65);
      this.setState({
        title: articleData.data.title,
        subtitle: sub,
        text: articleData.data.text,
      });
    }
  }

  render() {
    const { title, subtitle, text } = this.state;
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
      </div>
    );
  }
}

export default Article;
