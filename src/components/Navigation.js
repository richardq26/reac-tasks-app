/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// <span className="badge badge-pill badge-light ml-2">4</span>
class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <a className="navbar-brand" href="#">{this.props.titulo}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Tasks</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"><span className="badge badge-pill badge-light">{this.props.tasks}</span></a>
        
      </li>
    </ul>
  </div>
</div>
</nav>
    );
  }
}

export default Navigation;
