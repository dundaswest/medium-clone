import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Public from './Public';

import WriteForm from './Write';
import EditForm from './Edit';
import Landing from './Landing';
import Login from '../redux/containers/Login';
import List from './List';
import SignUp from './SignUp';

import '../../styles/app.css';

const FourOhFour = () => <h1>404</h1>;

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
        <Route path="/signUp" component={SignUp} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
