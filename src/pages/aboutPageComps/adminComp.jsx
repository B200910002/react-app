import React, { Component } from "react";

class AdminComp extends Component {
  state = {};
  styles = { width: "100%" , height:"200px"};
  styles2 = { width: "100%" };
  render() {
    return (
      <div class="container mt-3">
        <div className="card" style={this.styles2}>
          <img
            className="card-img-top"
            src={this.props.img}
            alt="Admin img"
            style={this.styles}
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">
              Tuunii neriig {this.props.name} gedeg. Ter {this.props.dep}-d ajildag.
            </p>
            <a href="#" className="btn btn-primary">
              See more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminComp;
