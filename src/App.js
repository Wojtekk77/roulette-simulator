import React, { Component } from "react";
import ButtonAddPerson from "./components/ButtonAddPerson.js.js";
import People from "./components/People.js.js";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./layouts/Page.js.js";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./styles/Header.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app"></div>
      </Router>
    );
  }
}

export default App;
