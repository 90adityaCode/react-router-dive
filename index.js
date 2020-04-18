import React, { Component } from "react";
import { render } from "react-dom";
import Routers from "./Routers";
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
      <>
        <Routers />
        <div class="container">
          <h3>Basic Navbar Example</h3>
          <p>
            A navigation bar is a navigation header that is placed at the top of
            the page.
          </p>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
