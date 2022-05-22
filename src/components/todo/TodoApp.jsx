import React, {Component} from 'react';
import LoginComponent from './LoginComponent';
import './LoginComponent.css';

class TodoApp extends Component {
  render() {
    return(
      <div className="TodoApp">
        My Todo Application
        <LoginComponent />
      </div>
    );
  }
}

export default TodoApp;