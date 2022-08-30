import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is message Component",
    };
  }
  changeMessage() {
    // this.setState({
    //   message: "message is changed",
    // });

    this.setState({
      message: "Hello world",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>change message </button>
      </div>
    );
  }
}

export default Message;
