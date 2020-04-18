import React, { Component } from "react";
import { render } from "react-dom";
import Routers from "./Routers";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="container">
        <Routers />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
