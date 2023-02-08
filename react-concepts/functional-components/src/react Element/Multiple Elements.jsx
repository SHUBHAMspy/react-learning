import React from 'react'

// 1. By using grouping operator we can have or return multiple react elements together

// 2.React implementation relies on constructing a tree like structure which it uses to for reconcilation. 
//   When you return multiple elements from React elements from the render method, the assumtion that the tree will have one root node for the Component will not longer hold, hence making it difficult to process reconcilation algorithm.
//   Thus react gives you a limitation to provide a root node. If you return an array of elements from v16 onwards, react will internally create a dummy node as the parent.

// 3.Because JavaScript return can only “output” one expression, because thats how it handles tail calls: only one expression, or nothing, is returned.
//   So you MUST return a single expression (or nothing), and once you wrap your elements in another element, then the return becomes a single expression and that is ok.

// 4. Also, react render() method only accepts a single argument i.e a react element to render .
//    But if you, return multiple element then you trying to put two things or rlements in a single slot.
const MultipleElements = () => {
  return (
    <div>
      <h2>Multiple Elements</h2>
      <p>
        Grouping operator can be used to group multiple elements together.
        The catch though is they should be grouped under a single parent.
      </p>
    </div>
  )
}

export default MultipleElements