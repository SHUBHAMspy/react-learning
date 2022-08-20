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

Things to know:
- React Component
- React Element
- Component Instance

**React Element**: A React element is a plain Javascript object which represents or describes a HTML element, which is created by React.createElement. Not only a react element represents or describes a HTML element but also a react element tree decribes a component instance.

**React Component**: A Component is a class or a function that takes input as props and returns/outputs an element tree.
If it is a function the output is the return value of the function.
If it is a class the output is the return value of the render() method.

**Component Instance**: React creates instance of a component to keep track of the component after the react element describes the component or the element tree has been created.
Each component has its state and lifecycle through which goes.


## Why React
  Things are simpler when UI components are unaware of the network, business logic, or app state. Given the same props, always render the same data.

React’s Virtual DOM is basically a JS Object and the reason its fast is because reading/writing on real DOM is costly but reading/writing on object is not. So reading/writing for any action/event is done on virtual DOM and when any changes are made to virtual DOM it simply changes the real DOM.

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

>> const App = () => {
    return 
    React.createElement("div", null , "App Component")
  }

>> Note: The Fact that JSX gets converted into React.createElement() function call is the reason we always have to import React at the top while working with JSX.

>> We actually don't call a component we just mention it in the JSX like this `<App/>`.React calls it behind the scenes.
 - If it is a function React calls it directly with the assigned props.
 - If it is a class React creates a new instance of it and calls it render() method.

## State
  State generally refers to the present condition of a system or entity.
  State and data are confused as one and the same thing or that state translates to data.
  Though data governs the state or what state will be.But it is not equal to state.
  In computer science, state is defined by input(here referenced as data), output and the transition

## Refs
  The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.



