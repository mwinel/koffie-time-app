import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1>404</h1>
            <h4>page not found</h4>
          </div>
          <div className="col-10 mx-auto text-center">
            <h5>
              The requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
