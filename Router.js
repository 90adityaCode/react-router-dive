import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route path="/user" />
      <Route path="/blog" />
      <Route path="admin" />
      
      
    </Switch>
  );
};