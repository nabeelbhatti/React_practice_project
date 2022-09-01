import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nabeel",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycyleA ComponentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log("LifeCycleA GetSnapShotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log("LifeCycleA ComponentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA ShouldComponentUpdate");
    return true;
  }

  changeNameState = () => {
    this.setState({
      name: "bhatti",
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <LifeCycleB />
        <button onClick={this.changeNameState}>ChangeName</button>
      </div>
    );
  }
}
