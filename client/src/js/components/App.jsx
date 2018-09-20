import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import WriteForm from './Write';
import Header from './Header';
import Author from './Author';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';
import Landing from './Landing';

const path = require('path');

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/write" component={WriteForm} />
    </Switch>
  </HashRouter>
);
export default App;
