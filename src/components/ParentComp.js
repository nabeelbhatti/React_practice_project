import React, { Component } from 'react'
import MemoCom from './MemoCom'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

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
    console.log("*********************ParentComponet**************** ")
    return (
      <div>
        {/* <RegComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/> */}
        <MemoCom name = {this.state.name}/>
      </div>
    )
  }
}
