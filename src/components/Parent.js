import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(ChildName) {
        alert(`Hello ${this.state.message} from ${ChildName}`)
    }
  render() {
    return (
      <div>
        <Child greetHandler = {this.greetParent}/>
      </div>
    );
  }
}

export default Parent;
