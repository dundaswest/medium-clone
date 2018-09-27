import React from 'react';
import { Redirect } from 'react-router-dom';
import { bool } from 'prop-types';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import clientId from '../../config';

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
/*
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToreferrer: false,
    };
  }

  login() {
    console.log('hi');
    fakeAuth.authenticate(() => {
      this.setState(state => ({
        redirectToreferrer: true,
      }));
    });
  }

  render() {
    const { redirectToreferrer } = this.state;
    console.log(this.props.isLoggedIn);
    if (this.props) {
      return <Redirect to="/protected" />;
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
            <input type="text" id="name" name="name" />
          </div>
          <div className="formGroup">
            <label htmlFor="password" id="passwordLable">
              Your password*
            </label>
            <input type="text" id="password" name="password" />
          </div>
          <div>
            <button
              type="submit"
              value="Send your message!"
              className="submitBtn"
              // onClick={this.login.bind(this)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
*/

const Login = ({ isLoggedIn, onClick }) => {
  if (isLoggedIn.loggedIn) {
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
      <GoogleLogin
        className="googleBtn"
        clientId={`${clientId}`}
        buttonText="Sign in with Google"
        onSuccess={onClick}
        onFailure={() => console.log('failed')}
      />
    </div>
  );
};

export default Login;
