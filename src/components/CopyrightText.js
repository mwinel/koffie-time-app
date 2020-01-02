import React from "react";
import { Link } from "react-router-dom";

const CopyrightText = () => {
  return (
    <div className="footer-bottom py-4">
      <div className="container">
        <div className="copyright-text">
          <small className="mr-3">© KoffieTime 2019</small>
          <small className="mr-3">
            <Link to="/" className="copyright-text-link">Terms</Link>
          </small>
          <small className="mr-3">
            <Link to="/" className="copyright-text-link">Privacy</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default CopyrightText;
