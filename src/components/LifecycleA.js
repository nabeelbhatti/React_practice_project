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

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
       <LifeCycleB/>
      </div>
    );
  }
}
