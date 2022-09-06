import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComponent";

class ClickCounter extends Component {
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
        <button onClick={this.handleCountChange}>{this.props.name}Click {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
