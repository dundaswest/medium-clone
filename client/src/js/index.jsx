import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';
import store from './redux/store/store';

ReactDOM.render(
  //  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  // </BrowserRouter>,,
  document.getElementById('app'),
);
