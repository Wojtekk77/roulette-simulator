import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { peopleReducer } from "./reducers/peopleReducers";
import "bootstrap/dist/css/bootstrap.css";
const store = createStore(peopleReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
