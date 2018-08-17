import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg border-bottom bg-secondary text-primary rounded">
        <div className="container row">
          <div className="col-md-8 justify-content-start">
            <Link className="navbar-brand" to="/users/list">Users list</Link>
          </div>
          <button
            className="navbar-toggler toogler-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse row navbar-collapse self-align-end justify-content-center"
            id="navbarNavAltMarkup"
          >
            <Link className="navbar-brand" to="/users/add">Add new user</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
