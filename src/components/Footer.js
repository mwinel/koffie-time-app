import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="footer py-5">
          <div className="row">
            <div className="col-lg-3 pb-5">
              <img src={logo} width={60} alt="logo" />
            </div>
            <div className="col-lg-3">
              <p className="footer-title">Koffie Time</p>
              <ul className="list-unstyled">
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Engineering</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Design</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Career</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Tutorial</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="footer-title">Social</p>
              <ul className="list-unstyled">
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Twitter</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Instagram</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="footer-title">More</p>
              <ul className="list-unstyled">
                <li className="py-1">
                  <Link to={"/"} className="footer-link">About</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Start Writing</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Sponsor</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Help</Link>
                </li>
                <li className="py-1">
                  <Link to={"/"} className="footer-link">Shop</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
