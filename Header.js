import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to='/'>
              React Router <br />Dive..
            </Link>
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


export default Header;