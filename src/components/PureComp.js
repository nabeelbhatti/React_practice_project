import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default PureComp
