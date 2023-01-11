import React, { Component } from "react";

class HomePageIntroComp extends Component {

  render() {
    return (
      <div className="container p-5 my-5 bg-dark text-white">
        {/* <h2>My First Bootstrap Page</h2> */}
        <h2>{this.props.title}</h2>
        <p>
          This container has a dark background color and a white text, and some
          extra padding and margins.
        </p>
      </div>
    );
  }
}

export default HomePageIntroComp;
