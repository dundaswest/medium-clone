import React from 'react';

import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  changeUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    console.log('hi', username, password);
    axios({
      method: 'post',
      url: '/signUp',
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to="/landing" />;
    }
    return (
      <div className="LoginGroup">
        <div id="Login-title">SIGN UP</div>
        <div className="formGroup">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={this.changeUserName}
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            id="password"
            name="password"
            onChange={this.changePassword}
            placeholder="Your password"
          />
        </div>
        <div className="formGroup">
          <button type="submit" id="SignIn-submitBtn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default SignUp;
