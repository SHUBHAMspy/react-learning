import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import WithoutJSX from './react Element/Without JSX';
import MultipleElements from './react Element/Multiple Elements';
import ReactElement from './react Element/React Element';
import UserDefinedComponent from './components/UserDefinedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>
        <ReactElement/>
        <MultipleElements/>
        <WithoutJSX/>
        <UserDefinedComponent/>
      </header>
    </div>
  );
}

export default App;
