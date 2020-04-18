import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">
          Logo
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link 3
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
