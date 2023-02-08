import React from 'react'

const Props = (props) => {
  // props is a special object useful for taking data outside of the component
  // which is passed as an argument during function invocation
  return (
    <div>{props}</div>  // use curly brackets to tell babel transpiler to treat it as expression to evaluate rather than a string
  )
}

export default Props