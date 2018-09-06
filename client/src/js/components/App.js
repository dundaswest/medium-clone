import React from 'react';
const path = require('path');
import Header from './Header';
import Author from './Author';
import Article from './Article';
import Sidebar from '../redux/containers/Clap';
import Footer from './Footer';


/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
    }
  }

  render() {
    return (
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
  }
}
*/
const App = () => (
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
export default App;
