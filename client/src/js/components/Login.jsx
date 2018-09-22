import React from 'react';

const Login = () => (
  <div className="loginGroup">
    <div>
      <label htmlFor="id" id="idLable">
        Your name*
      </label>
      <input type="text" id="name" name="name" />
    </div>
    <div>
      <label htmlFor="password" id="passwordLable">
        Your password*
      </label>
      <input type="text" id="password" name="password" />
    </div>
  </div>
);

export default Login;
