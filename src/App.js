import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'
import FirstClassComponent from './components/learning-examples/FirstClassComponent';
import SecondClassComponent from "./components/learning-examples/SecondClassComponent";
import FirstFunctionComponent from "./components/learning-examples/FirstFunctionComponent";
import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp"

class App extends Component { // Parent component
  render() {
    return (
// Including FirstComponent class
// <ClassName /> is shorthand for <ClassName></ClassName>
// The syntax enclosed by '-----' is JSX syntax

// -----
      <div className="App">
        {/*<Counter />*/}
        <TodoApp />
      </div>
// -----
// {1} uses embedded JS in JSX to label 1 as integer; using "1" would make it a string
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
// Including FirstComponent class
// <ClassName /> is shorthand for <ClassName></ClassName>
// The syntax enclosed by '-----' is JSX syntax

// -----
      <div className="LearningComponents">
        Hello World!
        <FirstClassComponent />
        <SecondClassComponent />
        <FirstFunctionComponent />
      </div>
// -----
    );
  }
}

export default App;

