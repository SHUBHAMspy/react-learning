import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {default as importedElement} from './components/EmployeeDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//* Elements mounted on the same root
// Elements will be shadowed or overridden by following elements when rendered on the same container.
const element = <h1 className='test'>Welcome to React</h1>
const rootOG = ReactDOM.createRoot(document.getElementById('root-og'))
rootOG.render(element)

const newElement = <h1 className='test'>React Concepts</h1>
// rootOG.render(newElement)

//* If we want to render both the elements then we have to use two different containers.
const anotherRoot = ReactDOM.createRoot(document.getElementById('another-root'))
anotherRoot.render(newElement)

//* If we want to have both the elements in the same container without using different container
const elementNew = (
  <div className='test'>
    <h2 >React Elements</h2>
    <h2 >React Components</h2>
  </div>
)
const collectiveRoot = ReactDOM.createRoot(document.getElementById('collective-root'))
collectiveRoot.render(elementNew)

const componentsRoot = ReactDOM.createRoot(document.getElementById('components-root'))
componentsRoot.render(importedElement)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
