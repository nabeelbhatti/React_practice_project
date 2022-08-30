import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Good Morning",
    };

    this.eventHandler = this.eventHandler.bind(this)
    //This is Method 3
  }

  eventHandler() {
    this.setState({
      message: "Good bye",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Methods for EventBind
        Method1 */}
        {/* This method cannot be used too much due to performance issue */}
        {/* <button onClick={this.evenHandler}>Click Me</button> */}
        {/* Method 2 */}
        {/* <button onClick={()=>this.eventHandle()}>Click Me</button> */}

        {/* Method 3 */}
        <button onClick={this.eventHanler}>Click me</button>
      </div>
    );
  }
}

export default EventBind;
