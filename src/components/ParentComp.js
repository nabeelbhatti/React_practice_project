import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Nabeel"
      }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: "Nabeel"
            })
        }, 2000)
    }
    
  render() {
    return (
      <div>
        <RegComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    )
  }
}
