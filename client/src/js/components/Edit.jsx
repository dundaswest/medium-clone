import React from 'react';
import Header from './Header';

const axios = require('axios');

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      id: '',
    };
  }

  componentDidMount() {
    console.log('edit', this.props.location.state.data);

    const articleData = this.props.location.state.data;

    this.setState({
      title: articleData.title,
      text: articleData.text,
      id: articleData.id,
    });
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
    const { title, text, id } = this.state;
    const data = { title, text, id };

    axios
      .put(`/${id}`, data)
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
      <div>
        <Header />
        <div className="textArea">
          <textarea id="title" value={this.state.title} onChange={this.handleTitleChange} />
          <textarea id="text" value={this.state.text} onChange={this.handleTextChange} />
          <button id="writeSubmitBtn" onClick={this.handleSubmit}>
            submit
          </button>
        </div>
      </div>
    );
  }
}
export default EditForm;
