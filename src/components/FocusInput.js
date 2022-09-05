import React, { Component } from "react";
import Input from "./Input";

export class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    console.log(this.componentRef.current.focusInput());
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Refs </button>
      </div>
    );
  }
}

export default FocusInput;
