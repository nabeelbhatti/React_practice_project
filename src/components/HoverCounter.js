import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComponent";

class HoverCounter extends Component {
 
  render() {
    const {count, incrementCount, name} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name}Hover {count} times</h2> {name}
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
