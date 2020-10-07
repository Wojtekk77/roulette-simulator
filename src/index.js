import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rouletteReducer } from "./reducers/rouletteReducer";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(rouletteReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
