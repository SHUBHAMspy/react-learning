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

**Features**:
1. JSX: It is an syntax extension to Javscript.The JSX gets converted to many React.createElement() calls.It describes your UI.

2. Unidirectional flow: React is based on Flux architecture, data should flow from parent to the child or parent component to child component.

3. Virtual Dom:  Virtual dom is basically a JS object that represents the real dom in memory it is actually the  tree of elements which decribes the element tree.

4. Declarative & Component Based: React allows you to declaratively describe your UI, using component based architecture.

5. Reuseability & Composition: React components can be reused to form bigger components and two different components can be composed together to form the desired UI.

**Advantages**:
1. The main advantage of react that i feel that the scripting can be utilized for mobile development as well.

2. As React creates virtual dom , this improves performance as JS virtual dom is faster than regular dom.

3. Defining ui though components using a declarative syntax, improves readability and debugging.
4. React supports flux architecture , which promotes state immutability i.e it does not allow to modify state directly.

5. Separation of concerns and modularity.
6. Scalable ui becuase of composition and reusable component architecture.

Limitations: 
1. Its sole purpose is also its limitation i.e it only handle view layer of the application. Which was its motivation to separate view from network and business logic.

2. It also has some learning curve.


Things to know:
- React Component
- React Element
- Component Instance
- JSX

**React Element**: A React element is a plain Javascript object which represents or describes a HTML element, which is created by React.createElement. Not only a react element represents or describes a HTML element but also a react element tree decribes a component instance.

**React Component**: A Component is a class or a function that takes input as props and returns/outputs an element tree.
If it is a function the output is the return value of the function.
If it is a class the output is the return value of the render() method.

**Component Instance**: React creates instance of a component to keep track of the component after the react element describes the component or the element tree has been created.
Each component has its state and lifecycle through which it goes.

### React and React DOM
If we want to render something in plain HTML it would be like this

  `<h1>Introduction to React</h1>`

But if we want to do the samething in React then we first need to create a react element of type h1 with content or children as 'Introduction to React' which will eventually spit out the heading onto the webpage.
For this React provides us a method called `React.createElement`.Using this method we can create react elements of any type.

  `const App = React.createElement('h1', null, 'Introduction to React')`

we need to somehow tell React to take this react element App and display it on the webpage using DOM.
And the way we do that is we say 

  `ReactDOM.render(App,document.getElementById('root'))`
render([what],[where]) method takes two arguments, the second argument is the target or the container DOM node, the purpose of this is to serve as mount point to hold our element or the root container.  

> Note: ReactDOM is a different library, which was a part of React but it was removed to promote it's  component driven ideology to compose reusable components together to form UI and to promote its platform independency i.e regardless of the environment or platform react can be used to compose components. 

So, React knows how to create components as well as to compose them.
Whereas, react-dom is a renderer package which handles the DOM part of react and is responsible for making changes in the environment to render the UI on the corresponding platform.

**JSX**: JSX is Javascript Syntax Extention it is nothing but extension to Javasript but not exactly a Javascript code. It gets compiled/ transpiled during the build process to React.createElement calls which is a valid JS that our browser can understand. It replaces the need of using React.createElement() method  by providing a more concise and declarative syntax. 
Since HTML style of DOM element creation is much more expressive,concise and declarative. So, JSX let's us use the same HTML like syntax inside our javascript code i.e in a declarative manner which will eventually produce DOM nodes on the webpage. 

`const App = <h1>Introduction to React</h1>`

### Ways to render
The difference between 
  `const app = <h1>Introduction to React</h1>`
                
          and
  ```
const Component = () => {
  return (
    <h1>Introduction to React</h1>
  )  
}
```
App is a variable that holds a static value of React element whereas
Component is a function that gives or returns React Element.
Both gives React elements, But Components are much more flexible and reuseable than the variable,since it can accept arguments as input and can also perform some logic on it before returning React element.

## Why React
  Things are simpler when UI components are unaware of the network, business logic, or app state. Given the same props, always render the same data.



# How React Works

A simple React component that returns React Elements:

```
const App = () => {
  return (
    <div> 
      App Component
    </div>
  )  
}
```
When we call this component `console.log(App())` we get the real return value.


  How we see it         |          How react sees it(The real returned Value) |
------------------------|-----------------------------------------------------|
```                     |                                                     |
const App = () => {     |    Object{                                          |
  return (              |      $$typof: Symbol(react.element),                |
    <div>               |      key: null,                                     |
      App Component     |      props: {children: "App Component"},            |
    </div>              |      ref: null,                                     |
  )                     |      type: "div"                                    |
}                       |    }                                                |
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

# Lifecycle in react
Every component in react has a lifecycle that it goes through.
Based on this React has categorized the lifecycle of a component into 3 different phases:
1. Mounting
2. Updating
3. Unmounting

Mounting: Mounting means to put elements into the DOM that involves creating and putting it into the DOM. Mounting phase uses 4 methods to mount a component namely:
1. *constructor()* : It is called when the component is initiated and it is the best place to initialize our 
    state. It takes props as argument and starts by calling super(props)
2. *getDerivedStateFromProps()*: It is called right before rendering the element in the dom.It takes 
    props and state as an argument and returns an derived or updated state.
3. *render()*: It is the only compulsory method required by react.It is responsible for rendering our 
    JSX to DOM.
4. *componentDidMount()* : This method is called after the component is rendered . It is also used 
    to fetch external data through api

2. Updating Phase: This is the second phase of the react component lifecycle. A component is updated when there is change in state and props .While updating components react calls these 5 methods inorder namely:
1. *getDerivedStateFromProps()*
2. *shouldComponentUpdate()*: It is used when you want your state or props to be updated or not 
    basically it checks that rendering should happen or not.It is used for optimization purposes. It 
    returns a boolean value .
3. *render()*
4. *getSnapshotBeforeUpdate()*: It is called right before updating the DOM.It has access to state 
   and props before the update so that you can check what is the value of state and props right 
    before update.
5. *componentDidUpdate()*: It is caled after the component has updated in the dom .It is the best 
    place in updating the dom in response to the change of props and state.

3. Unmounting: This is the final phase of a react component lifecycle.It occurs when a component 
    has been removed from the dom. It has only one method:
    1. *componentWillUnmount()*:  It is used for cleanup actions like cancelling api calls , removing 
        subcriptions and timers. You cannot use setstate here as the component gets unmounted 
        and no re-rendering will happen.

## Props:
  In React, we call the arguments that we pass to a component as props.
  1. Props is short for properties. It is used for passing data between components since, react follows unidirectional flow therefore props are passed from parent to child component.
  2. Data from props is read-only and cannot be modified by a component that is receiving from outside i.e props are immutable.
  3. In order to get data in props , we need to define prop attribute on child component and get data from parent component.
  4. Props do not have to be just data but callbacks can also be passed as props.

## State
  State generally refers to the present condition of a system or entity.
  State and data are confused as one and the same thing or that state translates to data.
  Though data governs the state or what state will be.But it is not equal to state.

  In computer science, state is defined by input(here referenced as data), output and the transition

  2. Data can be a data structure(an object) or a single value.It is use to initailize or set a default value when a component mounts.
  3. A component can create & manage their own data internally for state. i.e it is private to the component.
  4. State can be modified or updated by setState() method and should not be modified directly.

  And because of these differences we have two classes of components:
  1. *Stateless Components* : They have only props and no internal data, their logic revolves around the props they receive.
  2. *Stateful Components*: They have both props as well as internal data to convey the state.
  
  props are used by a component to get data from external environment i.e another component ( pure, functional or class) or a general class or javascript/typescript code
  states are used to manage the internal environment of a component means the data changes inside the component

## Refs
  The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.


