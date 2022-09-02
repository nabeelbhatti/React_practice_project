import React, { Component } from "react";

export default class RegComp extends Component {
  render() {
    console.log("Regualar Component Render");
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
