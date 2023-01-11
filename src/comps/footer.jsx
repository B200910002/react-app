import React, { Component } from "react";

class Footer extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      //this is return footer component
      <div className="container-fluid p-5 bg-dark text-white text-center">
        <p>© 2021. Бүх эрх хуулиар хамгаалагдсан.</p>
      </div>
    );
  }
}

export default Footer;
