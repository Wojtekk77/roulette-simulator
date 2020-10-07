import React, { Component } from "react";
import ButtonAddPerson from "./components/ButtonAddPerson.js";
import People from "./components/People.js";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./layouts/Page.js";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./styles/Header.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          {<Page />}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
