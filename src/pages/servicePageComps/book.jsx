import React, { Component } from "react";

class Book extends Component {
  state = {};
  styles2 = { width: "100%" };
  render() {
    return (
      <div class="container mt-4">
        <div className="card" style={this.styles2}>
          <div className="card-body">
            <h3 className="card-title">{this.props.title}</h3>
            <p className="card-text">
              <b>Categorie:</b> {this.props.categorie} <br />
              <b>Author:</b> {this.props.author}<br />
              <b>Price:</b> {this.props.price}<br />
              <b>date:</b> {this.props.date}
            </p>
            <a href="" className="btn btn-primary">
              Read it
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
