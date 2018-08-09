import React from 'react';
import Header from './Header';
import Author from './Author';
import Article from './Article';
import SideBar from './Sidebar';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    {
    }
  }

  render() {
    return (
      <div>


        <div className="Header">
          <Header />
          <SideBar />
          <Author />
          <Article />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
