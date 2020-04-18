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
          Router
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              User
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="admin">
              Admin
            </Link>
          </li>
        </ul>
        <div style={{ "margin-left": "70%" }}>
          <Link class="nav-link" to="admin">
            Login
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
