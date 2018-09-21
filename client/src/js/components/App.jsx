import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WriteForm from './Write';
import Header from './Header';
import Author from './Author';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';
import Landing from './Landing';

const path = require('path');

const FourOhFour = () => (
  <h1>
404
  </h1>
);
const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/write" component={WriteForm} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
