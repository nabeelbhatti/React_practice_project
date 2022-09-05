import React, { Component } from "react";
import FRInput from "./FRInput";

export default class FRParent extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  clickHandler = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <h1>Farward Refs</h1>
        <FRInput ref={this.input} />
        <button onClick={this.clickHandler}>Farward Refs</button>
      </div>
    );
  }
}
