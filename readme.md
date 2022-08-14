# DOM

DOM stands for "Document Object Model". It represents the entire UI of the web application as a tree data structure.
Since, HTML is a document & not a scripting language which is based on box-model and since,Javascript is an scripting language it does not understand what document is & HTML is plain document. So, DOM is a representation of the original HTML document, which the JS understands.

In the DOM model, the whole HTML document is considered as an object. Each of the tags and elements nested inside one another are also considered as objects forming a hierarical tree like structure.

Hence, the document is shown by DOM as a set of nodes and objects that can be changed with a scripting language like Javascript i.e DOM is used to connect or link webpages(HTML documents) to Javascript because it understands objects and works upon that model consideration that everything is an object, including the document itself which holds all other objects in a parent-child like box structure & everybody is accountable to the parent and through the document node anything can be accessed.  

# MVC(Model-View-Controller)

# SPA(Single Page Application)


# What is React
◾ React is an efficient, flexible and open-source JavaScript Library for building simple and scalable front-ends, created by Facebook.
◾ It is basically used to build Single Page Applications. It also allows us to create reusable UI components.
◾ React.JS is not a framework of JavaScript like Angular or React Native.
◾ It is the View layer of MVC (Model View Controller) application.

Things to know:
- React Component
- React Element
- Component Instance


# Why React
Life is simpler when UI components are unaware of the network, business logic, or app state. Given the same props, always render the same data.

React’s Virtual DOM is basically a JS Object and the reason its fast is because reading/writing on real DOM is costly but reading/writing on object it not. So reading/writing for any action/event is done on virtual DOM and when any changes are made to virtual DOM it simply changes the real DOM.

# How React Works


How we see it         |          How react sees it
----------------------|-----------------------------
```                   |   
const App = () => {   |    Object{ 
  return {            |      $$typof: Symbol(react.element),
    <div>             |      key: null,
      App Component   |      props: {children: "App Component"}, 
    </div>            |      ref: null,
  }                   |      type: "div"
}                     |    }    
                      |     
```                          

## Refs
The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.



