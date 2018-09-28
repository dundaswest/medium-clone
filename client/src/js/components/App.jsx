import React from 'react';
import {
  BrowserRouter, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import WriteForm from './Write';
import Header from './Header';
import Author from './Author';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';
import Landing from './Landing';
import Login from '../redux/containers/Login';
//import SignInWith from './SignInWith';
import SignUp from './SignUp';
import Logout from '../redux/containers/Logout'
const path = require('path');

const FourOhFour = () => (
  <h1>
404
  </h1>
);

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
const Public = () => (
  <h3>
    Piblic
    <ul>
      <li>
        <Link to="login">
Login
        </Link>
      </li>
    </ul>
  </h3>
);
const Protected = () => (
  <h3>
Protected
  </h3>
);
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)
    }
  />
);
const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Public} />
        <Route exact path="/landing" component={Landing} />
        <Route path="/write" component={WriteForm} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
        <Route component={SignUp} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
