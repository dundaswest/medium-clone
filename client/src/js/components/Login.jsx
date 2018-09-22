import React from 'react';

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
      <button type="submit" value="Send your message!" className="submitBtn">
        Submit
      </button>
    </div>
  </div>
);

export default Login;
