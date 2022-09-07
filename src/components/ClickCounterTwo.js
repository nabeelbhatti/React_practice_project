import React, { Component } from "react";

export default class ClickCounterTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  icrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.icrementCount}>Click {count} times</button>
      </div>
    );
  }
}
