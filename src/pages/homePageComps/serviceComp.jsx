import React, { Component } from "react";

class ServiceComp extends Component {
  state = {
    count: this.props.value,
  };

  render() {
    console.log(this.props);
    return (
      <div className="container" align="center">
        {this.props.children.at(0)}
        {this.props.children.at(1)}
        <span className={this.getBadgeClasses()}>{this.format()}</span>
        <button onClick={this.click} className="btn btn-secondary btn-sm">
          increase
        </button>
        <br />
        <button onClick={this.delete} className="btn btn-danger btn-sm m-2">
          decrease
        </button>
      </div>
    );
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };

  delete = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  format() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default ServiceComp;
