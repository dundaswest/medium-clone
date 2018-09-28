import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WriteForm from './Write';
import Header from '../redux/containers/Logout';
import Author from './Author';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';

const Landing = () => (
  <div>
    <div className="Header">
      <Header />
      <Sidebar />
      <Author />
      <Article />
      <Footer />
    </div>
  </div>
);
export default Landing;
