import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export default class ParentComp extends Component {
  render() {
    return (
      <div>
        <RegComp/>
        <PureComp/>
      </div>
    )
  }
}
