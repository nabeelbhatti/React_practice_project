import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello",
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycyleB ComponentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log("LifeCycleB GetSnapShotBeforeUpdate")
  }

  componentDidUpdate(prevProps, PrevState, ) {
    console.log("LifeCycleB ComponentDidUpdate")
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB ShouldComponentUpdate");
    return true;
  }

  render() {
    console.log("LifeCycleB render");
    return (
      <div>
        <h1>LifeCycle B</h1>
      </div>
    );
  }
}
