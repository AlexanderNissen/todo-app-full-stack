import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class CounterButton extends Component {
  // Define constructor with initial state
  constructor() {
    super(); // Get all methods and properties from the Component class, we're inheriting from
    
    // this.state = {
    //   counter: 0 // State of counter
    // };

    // // Binding methods to instance of class
    // this.increment= this.increment.bind(this); // Obsolete if methods declared with arrow functions
    // this.decrement = this.decrement.bind(this);
  }

  // Method called 
  render() {
    // Arrow definition alternative:
    // render = () => {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        {/*<span className="count">{this.state.counter}</span> COMMENTED OUT JSX */}
      </div>
    );
  }
// REMOVAL OF STATE FROM CHILD COMPONENT
//   increment() {
//     // Arrow alternative with no parameter passed:
//     // incrementOne = () => {
//     // To make increment method available, we need to bind the method to the class.
//     // This is done in the constructor
//     // To update the state of a component directly is bad practice in React. Don't do:
//     // this.state.counter++
//     this.setState({
//       counter: this.state.counter + this.props.by
//     });
//     this.props.incrementMethod(this.props.by);
//   }

//   decrement() {
//     this.setState({
//       counter: this.state.counter - this.props.by
//     });
//     this.props.decrementMethod(this.props.by);
//   }
// }
// Setting default value of the "by" prop on class Counter
// CounterButton.defaultProps = {
//   by: 1
// };
// // Invoking type check for "by" prop
// CounterButton.propTypes = {
//   by: Proptypes.number
};

export default CounterButton;
