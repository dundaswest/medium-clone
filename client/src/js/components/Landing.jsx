import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from '../redux/containers/Logout';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';

const Landing = (props) => {
  const { location } = props;
  let articleData = '';
  if (location.state) {
    articleData = location.state;
  }

  return (
    <div>
      <div className="Header">
        <Header />
        <Sidebar />
        <Article articleData={articleData} />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
