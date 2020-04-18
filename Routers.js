import React from "react";
import { BrowserRouter as Router, useParams, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import User from "./_container/User";
import Blog from "./_container/Blog";
import Admin from "./_container/Admin";

const RouteNav = () => { 
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouteNav;
