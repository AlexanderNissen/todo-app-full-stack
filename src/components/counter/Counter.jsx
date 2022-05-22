import React, { Component } from 'react';
import './Counter.css'; // Importing a CSS file
import CounterButton from './CounterButton';

class Counter extends Component {
// Parent-child relationship between Counter and CounterButton
// From CounterButton increment(), we want to be able to increment() in Counter
// How? -> Pass parent method as property to child component
// Effectively we've moved state from child to parent, i.e. state is moved UP
  constructor() {
    super();

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
// Including FirstComponent class
// <ClassName /> is shorthand for <ClassName></ClassName>
// The syntax enclosed by '-----' is JSX syntax

// -----
      <div className="App">
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/> 
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
// -----
// {1} uses embedded JS in JSX to label 1 as integer; using "1" would make it a string
    );
  }

  reset() {
    this.setState({counter: 0});
  }

  increment(by) {
    //console.log("increment from child")
    this.setState(
      (prevState) => {
        return {counter: prevState.counter + by}
      }
    );
  }

  decrement(by) {
    //console.log("decrement from child")
    this.setState(
      (prevState) => {
        return {counter: prevState.counter - by}
      }
    );
  }
}

export default Counter;