import React from 'react';
import {
  BrowserRouter, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import WriteForm from './Write';
import EditForm from './Edit';
import Landing from './Landing';
import Login from '../redux/containers/Login';

import List from './List';
import SignUp from './SignUp';

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
        <Route path="/edit" component={EditForm} />
        <Route path="/login" component={Login} />
        <Route path="/list" component={List} />
        <PrivateRoute path="/protected" component={Protected} />
        <Route path="/signUp" component={SignUp} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
