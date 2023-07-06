import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  // render method is the only required method
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Introduction to {this.props.type} Component </h1>
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            "In order to create a React class component we need to define or create a class
            and extend React.Component class"
          </p>
        </header>
      
      </div>
    )
  }
}

export default App;
