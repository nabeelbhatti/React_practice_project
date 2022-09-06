import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComponent";

class HoverCounter extends Component {
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
    return (
      <div>
        <h2 onMouseOver={this.icrementCount}>{this.props.name}Hover {this.state.count} times</h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
