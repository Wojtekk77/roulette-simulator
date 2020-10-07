import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import MainPage from "./layouts/MainPage";
import Aside from "./layouts/Aside";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <MainPage />
      </div>
    </Router>
  );
};

export default App;
