import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import keys from '../../../../config/keys';

// const clientId = keys || process.env.API_KEY;

const axios = require('axios');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      clientId: keys,
    };
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      axios
        .get('/getGoogleid')
        .then((res) => {
          console.log(res);
          this.setState({ clientId: res.data });
        })
        .catch(err => console.log(err));
    }
    console.log('CLIENT ID', this.state.clientId);
  }

  changeUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  responseGoogle = (response) => {
    console.log(response);
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    const { onClick } = this.props;
    console.log('hi', username, password);
    axios({
      method: 'post',
      url: '/login',
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        console.log('loggedIn!!!!!!!');

        onClick();
      })
      .catch((error) => {
        console.log(error);
        return <Redirect to="/FourOhFour" />;
      });
  };

  login() {
    const { username, password } = this.state;
    axios({
      method: 'post',
      url: '/login',
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        console.log('loggedIn!!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { isLoggedIn, onClick } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const clientId = this.state.clientId || keys;

    if (isLoggedIn) {
      return <Redirect to="/landing" />;
    }

    return (
      <div className="Login-Container">
        <div className="LoginGroup">
          <div id="Login-title">ACCOUNT LOGIN</div>
          <div className="formGroup">
            <input type="text" id="name" placeholder="Your name" onChange={this.changeUserName} />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Your password"
              onChange={this.changePassword}
            />
            <button
              type="submit"
              value="Send your message!"
              id="submitBtn"
              onClick={this.handleSubmit}
            >
              Submit
            </button>

            <div className="SignInDiv">
              <span id="msg">Don’t have an account?</span>
              <Link to="SignUp" className="sign-up">
                Sign up
              </Link>
            </div>
            <div className="clear" />
            <GoogleLogin
              className="googleBtn"
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onClick}
              onFailure={this.responseGoogle}
              cookiePolicy="single_host_origin"
            />
            <div className="clear" />
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Login;
