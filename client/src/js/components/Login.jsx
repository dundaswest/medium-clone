import React from 'react';
import {
  BrowserRouter, Route, Switch, Link, Redirect,
} from 'react-router-dom';

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
      redirectToreferrer: false,
    };
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState(state => ({
        redirectToreferrer: true,
      }));
    });
  }

  render() {
    const { redirectToreferrer } = this.state;

    if (redirectToreferrer) {
      return <Redirect to="/" />;
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
              onClick={this.login.bind(this)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
/*
const Login = () => (
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
        onClick={() => console.log('hoho')}
      >
        Submit
      </button>
    </div>
  </div>
);
*/
export default Login;
