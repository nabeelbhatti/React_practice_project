import React from 'react'

 function MemoCom({name}) {
    console.log("Rendering Memo Component")
  return (
    <div>
      <h3>This is functional Component {name}</h3>
    </div>
  )
}

export default React.memo(MemoCom)
