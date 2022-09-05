import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCountChange = () => {
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
        <button onClick={this.handleCountChange}>Click {count} times</button>
      </div>
    );
  }
}
