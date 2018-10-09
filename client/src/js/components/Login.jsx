import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import clientId from '../../config';

const axios = require('axios');

const responseGoogle = (response) => {
  console.log(response);
};
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.changePassword = this.changePassword.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login() {
    axios({
      method: 'post',
      url: '/login',
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((response) => {
        console.log('loggedIn!!');
      })
      .catch((error) => {
        console.log(error);
      });
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
      url: '/login',
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((response) => {
        console.log(response.status);
        console.log('loggedIn!!!!!!!');
        // why onClick not running here??
        this.props.onClick();
      })
      .catch((error) => {
        console.log(error);
        return <Redirect to="/FourOhFour" />;
      });
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/landing" />;
    }

    return (
      <div>
        <p>
You must log in to view this page
        </p>
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
            <button
              type="submit"
              value="Send your message!"
              className="submitBtn"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="SignInDiv">
            <span id="msg">
Don’t have an account?
            </span>
            <Link to="SignUp" className="sign-up">
              Sign up
            </Link>
          </div>
          <div className="clear" />
          <GoogleLogin
            className="googleBtn"
            clientId={`${clientId}`}
            buttonText="Sign in with Google"
            onSuccess={this.props.onClick}
            onFailure={() => console.log('failed')}
          />
          <div className="clear" />
        </div>
      </div>
    );
  }
}

/*
const Login = ({ isLoggedIn, onClick }) => {
  if (isLoggedIn) {
    return <Redirect to="/landing" />;
  }
  return (
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
        <button type="submit" value="Send your message!" className="submitBtn" onClick={onClick}>
          Submit
        </button>
      </div>
      <div className="SignInDiv">
        <span id="msg">
Don’t have an account?
        </span>
        <Link to="SignUp" className="sign-up">
          Sign up
        </Link>
      </div>
      <div className="clear" />
      <GoogleLogin
        className="googleBtn"
        clientId={`${clientId}`}
        buttonText="Sign in with Google"
        onSuccess={onClick}
        onFailure={() => console.log('failed')}
      />
      <div className="clear" />
    </div>
  );
};
*/
export default Login;
