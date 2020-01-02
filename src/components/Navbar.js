import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as NavBar, Nav } from "react-bootstrap";
import { NavbarBrand } from "../styles/NavbarBrand";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import logo from "../logo.png";

class Navbar extends Component {
  render() {
    return (
      <NavBar
        className="navbar navbar-expand-lg py-3"
        collapseOnSelect
        scrolling="true"
        expand="md"
        sticky="top"
      >
        <div className="container">
          <NavbarBrand>
            <Link to={"/"}>
              <img src={logo} width={40} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5">
              <Nav.Link className="nav-link px-lg-3">Engineering</Nav.Link>
              <Nav.Link className="nav-link px-lg-3">Design</Nav.Link>
              <Nav.Link className="nav-link px-lg-3">Career</Nav.Link>
              <Nav.Link className="nav-link px-lg-3">Tutorials</Nav.Link>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0 ml-lg-5">
              <Nav.Link className="nav-link px-lg-3">Login</Nav.Link>
            </ul>
            <ButtonPrimary className="ml-lg-4 mt-3 mt-lg-0">
              Get Started
            </ButtonPrimary>
          </NavBar.Collapse>
        </div>
      </NavBar>
    );
  }
}

export default Navbar;
