import React from 'react'

const UserDefinedComponent = () => {
  return (
    <div className='test'>
      <h1>User Defined Component</h1>
      <p>User-defined components are also transpiled to React element or tree of elements</p>
      <p>User-defined component should be defined in Capital other wise it will not be considered as component rather a dom element</p>
      <p>
        React Elements can represent Dom Elements as well as User-defined components.
        When react sees an element representing a user-defined component it passes JSX atrributes to the component
        as a single object called props.
      </p>
    </div>
  )
}

export default UserDefinedComponent