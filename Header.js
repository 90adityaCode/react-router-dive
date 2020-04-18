import React from "react";

class Header extends Componnet {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              React Dive
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
