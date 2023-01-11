import React, { Component } from "react";

class Header extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      //this is return component
      <div className="container-fluid p-5 bg-dark text-white text-center">
        <h1>My First React</h1>
        <p>minii anhnii react ashiglasan web haha!</p>
      </div>
    );
  }
}

export default Header;
