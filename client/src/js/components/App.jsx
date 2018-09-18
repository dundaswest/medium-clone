import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WriteForm from './Write';
import Header from './Header';
import Author from './Author';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';

const path = require('path');

const App = () => (
  <div>
    <div className="Header">
      <Header />
      <Sidebar />
      <Author />
      <Article />
      <Footer />
      <WriteForm />
    </div>
  </div>
);
export default App;
