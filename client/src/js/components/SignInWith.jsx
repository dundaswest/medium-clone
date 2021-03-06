import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { PropTypes } from 'prop-types';

const SignInWith = (props) => {
  const responseGoogle = (res) => {
    const { SignInUser, toggleClose } = props;
    const postData = {
      name: res.w3.ig,
      provider: 'google',
      email: res.w3.U3,
      provider_id: res.El,
      token: res.Zi.access_token,
      provider_pic: res.w3.Paa,
    };
    console.log(postData);

    // build our user data
    SignInUser(postData);
    toggleClose();
  };
  return (
    <div>
      <div
        data-behavior="overlay"
        className={
          props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'
        }
      >
        <button
          onClick={props.toggleClose}
          data-behavior="close-overlay"
          type="button"
          className="overlay-close"
        >
          <span className="glyphicon glyphicon-remove" />
        </button>
        <nav>
          <h2 className="grayed-heading center">Sign In</h2>
          <ul className="omniauth-button-group">
            <li className="omniauth-button google">
              <GoogleLogin
                className="button google"
                clientId="292354040290-rs4cq2nkdtss2s0ufr0fkeljiaq1pi29.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <i className="fa fa-google" />
                <span> SignIn with Google</span>
              </GoogleLogin>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modalMode: state.common.modalMode,
});
export default connect(
  mapStateToProps,
  {
    toggleClose,
    toggleOpen,
    SignInUser,
  },
)(SignInWith);
