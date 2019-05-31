import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

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
    const { location } = this.props;
    console.log('edit', location.state.data);

    const articleData = location.state.data;

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
    const { title, text } = this.state;
    return (
      <div>
        <Header />
        <div className="textArea">
          <textarea id="title" value={title} onChange={this.handleTitleChange} />
          <textarea id="text" value={text} onChange={this.handleTextChange} />

          <button id="writeSubmitBtn" type="submit" onClick={this.handleSubmit}>
            submit
          </button>
        </div>
      </div>
    );
  }
}

EditForm.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditForm;
