import React from 'react';

const axios = require('axios');

class WriteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  }

  handleTitleChange = (e) => {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  };

  handleTextChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  handleSubmit = () => {
    const { title, text } = this.state;
    const params = { title, text };

    axios
      .post('/addStory', params)
      .then((res) => {
        console.log(res);
        console.log('saved');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="textArea">
        <textarea id="title" placeholder="Title" onChange={this.handleTitleChange} />
        <textarea id="text" placeholder="Tell your story..." onChange={this.handleTextChange} />
        <button id="writeSubmitBtn" onClick={this.handleSubmit}>
          submit
        </button>
      </div>
    );
  }
}
export default WriteForm;
