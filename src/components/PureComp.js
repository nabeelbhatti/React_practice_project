import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render")
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default PureComp
