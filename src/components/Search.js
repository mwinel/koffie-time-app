import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search posts..." />
      </div>
    );
  }
}

export default Search;
