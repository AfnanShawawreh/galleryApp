import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import App from "./App";
import "./index.css";
const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <App />,
 </Provider>,
  document.getElementById("root")
);
