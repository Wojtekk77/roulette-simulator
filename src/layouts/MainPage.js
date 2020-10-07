import React from "react";
import { Route, Switch } from "react-router-dom";
import RouletteBoard from "../components/rouletteBoard/RouletteBoard";
const MainPage = () => {
  return (
    <Switch>
      <Route path="/" exact component={RouletteBoard} />
      <Route path="/person/:id" component={RouletteBoard} />
      {/* <Route path="/contact" component={ContactPage} />
  <Route path="/admin" component={AdminPage} />
  <Route path="/login" component={LoginPage} /> */}
      <Route component={RouletteBoard} />
    </Switch>
  );
};

export default MainPage;
