import React from 'react';
import Header from './Header';
import Author from './Author';

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
          <Author />
        </div>
      </div>
    );
  }
}

export default App;
