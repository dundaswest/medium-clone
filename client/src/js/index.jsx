import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store/store";

console.log(store.getState());
store.dispatch({ type: "CLAP_ARTICLE" });
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
