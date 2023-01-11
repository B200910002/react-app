import React, { Component } from "react";
import img1 from "./imgs/la.jpg";
import img2 from "./imgs/chicago.jpg";
import img3 from "./imgs/ny.jpg";

class ItroImg extends Component {
    styles = {
        width: "100%"
    }
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img1}
                alt="Los Angeles"
                className="d-block"
                style={this.styles}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                alt="Chicago"
                className="d-block"
                style={this.styles}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                alt="New York"
                className="d-block"
                style={this.styles}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default ItroImg;
