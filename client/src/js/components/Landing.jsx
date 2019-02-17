import React from 'react';
import PropTypes from 'prop-types';
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
Landing.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
export default Landing;
