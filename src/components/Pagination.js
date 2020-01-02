import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagination extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center py-4">
          <li className="page-item disabled">
            <Link to="/all" className="page-link" tabIndex="-1">
              Prev
            </Link>
          </li>
          <li className="page-item">
            <Link to="/all" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link to="/all" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link to="/all" className="page-link">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
