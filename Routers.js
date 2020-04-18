import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import User from '../_container/User';
import Blog from '../_container/Blog';
import Admin from '../_container/Admin';
const RouteNav = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/user" component={User}/>
        <Route path="/blog" component={Blog}/>
        <Route path="admin" component={Admin}/>
      </Switch>
    </Router>
  );
};

export default RouteNav;
