import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../redux/actions';

const axios = require('axios');
/*
const SignUp = () => (
  <div className="LoginGroup">
    <div className="formGroup">
      <label htmlFor="id" id="idLable">
        Your name*
      </label>
      <input type="text" id="name" name="name" />
    </div>
    <div className="formGroup">
      <label htmlFor="password" id="passwordLable">
        Your password*
      </label>
      <input type="text" id="password" name="password" />
    </div>
    <div>
      <button type="submit" className="submitBtn" onClick={() => console.log('hi')}>
        Submit
      </button>
    </div>
  </div>
);
*/

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
    this.changePassword = this.changePassword.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  changeUserName(event) {
    this.setState({ username: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    console.log('hi', this.state.username, this.state.password);
    axios({
      method: 'post',
      url: '/signUp',
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/landing" />;
    }
    return (
      <div className="LoginGroup">
        <div className="formGroup">
          <label htmlFor="id" id="idLable">
            Your name*
          </label>
          <input type="text" id="name" name="name" onChange={this.changeUserName} />
        </div>
        <div className="formGroup">
          <label htmlFor="password" id="passwordLable">
            Your password*
          </label>
          <input type="text" id="password" name="password" onChange={this.changePassword} />
        </div>
        <div>
          <button type="submit" className="submitBtn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default SignUp;
