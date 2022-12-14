import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  counterMessage() {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.counterMessage()}>Click me</button>
      </div>
    );
  }
}

export default Counter;
