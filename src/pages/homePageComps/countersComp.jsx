import React, { Component } from "react";
import ServiceComp from "./serviceComp";

class CountersComp extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 2,
        value: 0,
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 3,
        value: 0,
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 4,
        value: 0,
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  };

  render() {
    return (
      //this is return component
      <div className="container mt-5">
        <div className="row">
          {this.state.counters.map((counter) => (
            <div className="col-sm-3" key={counter.id}>
              <ServiceComp key={counter.id} value={counter.value}>
                <h4>Counter #{counter.id}</h4>
                <p>{counter.p}</p>
              </ServiceComp>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CountersComp;
