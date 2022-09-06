import React, { Component } from "react";

export default class HoverCounter extends Component {
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
        <h2 onMouseOver={this.icrementCount}>Hover {this.state.count} times</h2>
      </div>
    );
  }
}
