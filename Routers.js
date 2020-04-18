import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/user" />
        <Route path="/blog" />
        <Route path="admin" />
      </Switch>
    </Router>
  );
};

export default Routers;
