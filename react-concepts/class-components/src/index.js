import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootOG = ReactDOM.createRoot(document.getElementById('root-og'));

// The transition happening between or the process of synchronization happenning between virtual and real Dom is called rendering.
rootOG.render(        // render function is responsible for rendering.
  <React.StrictMode>
    <App type="Class"/>
    
  </React.StrictMode>
);

// Elements mounted on the same root
const element = <h1 className='test'>Welcome to React</h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)

// const newElement = <h1 className='test'>React Concepts</h1>
// root.render(newElement)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
