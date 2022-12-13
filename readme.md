## DOM

DOM stands for "Document Object Model". It represents the entire UI of the web application as a tree data structure.
Since, HTML is a document & not a scripting language which is based on box-model and since,Javascript is an scripting language it does not understand what document is & HTML is plain document. So, DOM is a representation of the original HTML document, which the JS understands.

In the DOM model, the whole HTML document is considered as an object. Each of the tags and elements nested inside one another are also considered as objects forming a hierarical tree like structure.

Hence, the document is shown by DOM as a set of nodes and objects that can be changed with a scripting language like Javascript i.e DOM is used to connect or link webpages(HTML documents) to Javascript because it understands objects and works upon that model consideration that everything is an object, including the document itself which holds all other objects in a parent-child like box structure & everybody is accountable to the parent and through the document node anything can be accessed.  

## MVC(Model-View-Controller)

## SPA(Single Page Application)


## What is React
- React is an efficient, flexible and open-source JavaScript Library for building simple and scalable front-ends, created by Facebook.
- It is basically used to build Single Page Applications. It also allows us to create reusable  UI components.
- React.JS is not a framework of JavaScript like Angular or React Native.
- It handles the View layer of MVC (Model View Controller) application.

Features:
1. JSX: It is an syntax extension to Javscript.The JSX gets converted to many React.createElement() calls.It describes your UI.

2. Unidirectional flow: React is based on Flux architecture, data should flow from parent to the child or parent component to child component.

3. Virtual Dom:  Virtual dom is basically a JS object that represents the real dom in memory it is actually the  tree of elements which decribes the element tree.

4. Declarative & Component Based: React allows you to declaratively describe you UI, using component based architecture.

5. Reuseability & Composition: React components can be reused to form bigger components and two different components can be composed together to form the desired UI.

Things to know:
- React Component
- React Element
- Component Instance

**React Element**: A React element is a plain Javascript object which represents or describes a HTML element, which is created by React.createElement. Not only a react element represents or describes a HTML element but also a react element tree decribes a component instance.

**React Component**: A Component is a class or a function that takes input as props and returns/outputs an element tree.
If it is a function the output is the return value of the function.
If it is a class the output is the return value of the render() method.

**Component Instance**: React creates instance of a component to keep track of the component after the react element describes the component or the element tree has been created.
Each component has its state and lifecycle through which it goes.


## Why React
  Things are simpler when UI components are unaware of the network, business logic, or app state. Given the same props, always render the same data.



# How React Works

A simple React component that returns React Elements:

```
const App = () => {
  return ()
    <div> 
      App Component
    </div>
  )  
}
```
When we call this component `console.log(App())` we get the real return value.


How we see it         |          How react sees it(The real returned Value) |
----------------------|-----------------------------------------------------|
```                   |                                                     |
const App = () => {   |    Object{                                          |
  return (            |      $$typof: Symbol(react.element),                |
    <div>             |      key: null,                                     |
      App Component   |      props: {children: "App Component"},            |
    </div>            |      ref: null,                                     |
  )                   |      type: "div"                                    |
}                     |    }                                                |
                      |                                                     |
```      

What happens behind the scenes is:
  1. The JSX gets converted to many `React.createElement()` function calls which results in a tree of elements.
  2. Then, each of those function calls returns object similar to the above object.

     const App = () => {
      return 
        React.createElement("div", null , "App Component")
    }

      > Note: The Fact that JSX gets converted into React.createElement() function call is the reason we always have to import React at the top while working with JSX.


      We actually don't call a component we just  mention it in the JSX like this `<App/>`.React  calls it behind the scenes.
      - If it is a function React calls it directly with the assigned props.
      - If it is a class React creates a new instance of it and calls it render() method.

      React not only calls our component but also manages the component instances by mounting and unmounting them.
      
  3. After a React element has described a component or the element tree has been created, React creates a instance of the component to keep track of it.

      All react does is create a tree of elements.
      This is very fast , because React elements are plain Javascript objects.And this all happens when the render() method is called.
      And therefore, this whole process is called **Rendering**.

      ### Rendering
      Rendering is the process in which React asks your components to describe what they want their section of the UI to look like now based on the current combination of props and state. 

      During the rendering process, React will start at the root of the component tree and recursively move downwards to encounter components and calls them.

      > Note:

  4. React keeps this tree of elements in memory, and this tree of elements is actually called **Virtual Dom**.

      ### Virtual Dom
      Virtual DOM is basically a JS Object that represents real dom in memory it is actually the tree of elements that describes the Dom Element and the reason its fast is because reading/writing on real DOM is costly but reading/writing on object is not. So reading/writing for any action/event is done on virtual DOM and when any changes are made to virtual DOM it simply changes the real DOM.

  5. On initial render, React has to insert the full tree into the Dom. Which is very expensive process as there is no other way around it.

  6. If the tree of elements changes due to some state change, which results into a diferent return value and different elements.
  React once again generates a new tree of elements by starting at the root of the component tree and loop downwards to find all components that have been flagged as needing updates.For each flagged component, React will call either `classComponentInstance.render()` (for class components) or `FunctionComponent()` (for function components), and save the render output.And now we have two trees the old tree and the new tree(the virtual dom).

  7. The Next thing to do is to sync the Virtual Dom and real Dom. React can't just re-render the whole tree because making changes to the dom is slow and heavy process.
  And that is where React does **Reconciliation**.

      ### Reconciliation
      Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component. 

      React takes the old tree and compares with the new tree and finds the smallest number of operations to transform one tree into another.
      This is handled by the **Diffing Algorithm**

      ### Diffing Algorithm
      Diffing algorithm is named such because it diffrentiates between two trees.And It does it by by considering two assumptions:

      - Two elements with different types will produce two completely different trees.
      - When we have a list of items which often changes , we should provide a unique "key" as a prop. Key is a very special property that plays a very important role in the Diffing algorithm.

      It destroys all the component instances in the old tree along with their current state.
      And this actually called **unmounting**.

  8. React then applies all the calculated changes to the DOM in one synchronous sequence.

  React does all the above process in two phases:
  
  1. Render Phase
  2. Commit Phase.

  Render Phase: During render phase all the work of rendering components and calculating the changes is done.

  Commit Phase: During the commit phase all those  changes are applied to the Dom.

  After React has updated the DOM in the commit phase, it updates all refs accordingly to point to the requested DOM nodes and component instances. It then synchronously runs the `componentDidMount` and `componentDidUpdate` class lifecycle methods, and the `useLayoutEffect` hooks.

  React then sets a short timeout, and when it expires, runs all the useEffect hooks. This step is also known as the "Passive Effects" phase.

## State
  State generally refers to the present condition of a system or entity.
  State and data are confused as one and the same thing or that state translates to data.
  Though data governs the state or what state will be.But it is not equal to state.

  In computer science, state is defined by input(here referenced as data), output and the transition

## Refs
  The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.


# Lifecycle in react
Every component in react has a lifecycle that it goes through.
Based on this React has categorized the lifecycle of a component into 3 different phases:
1. Mounting
2. Updating
3. Unmounting

Mounting: Mounting means to put elements into the DOM that involves creating and putting it into the DOM. Mounting phase uses 4 methods to mount a component namely:
1. constructor() : It is called when the component is initiated and it is the best place to initialize our 
    state. It takes props as argument and starts by calling super(props)
2. getDerivedStateFromProps(): It is called right before rendering the element in the dom.It takes 
    props and state as an argument and returns an derived or updated state.
3. render(): It is the only compulsory method required by react.It is responsible for rendering our 
    JSX to DOM.
4. componentDidMount() : This method is called after the component is rendered . It is also used 
    to fetch external data through api

2. Updating Phase: This is the second phase of the react component lifecycle. A component is updated when there is change in state and props .While updating components react calls these 5 methods inorder namely:
1. getDerivedStateFromProps()
2. shouldComponentUpdate(): It is used when you want your state or props to be updated or not 
    basically it checks that rendering should happen or not.It is used for optimization purposes. It 
    returns a boolean value .
3. render()
4. getSnapshotBeforeUpdate(): It is called right before updating the DOM.It has access to state 
   and props before the update so that you can check what is the value of state and props right 
    before update.
5. componentDidUpdate(): It is caled after the component has updated in the dom .It is the best 
    place in updating the dom in response to the change of props and state.

3. Unmounting: This is the final phase of a react component lifecycle.It occurs when a component 
    has been removed from the dom. It has only one method:
    1. componentWillUnmount():  It is used for cleanup actions like cancelling api calls , removing 
        subcriptions and timers. You cannot use setstate here as the component gets unmounted 
        and no re-rendering will happen.

