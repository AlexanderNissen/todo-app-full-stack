import React, {Component} from 'react';
import LoginComponent from './LoginComponent';
import './LoginComponent.css';
import WelcomeComponent from './WelcomeComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Routes>
              <Route path="/" element={<LoginComponent/>}/>
              <Route path="/login" element={<LoginComponent />}/>
              <Route path="/welcome" element={<WelcomeComponent />}/>
              <Route path="*" element={<ErrorComponent/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return (
    <div>
      An error occured. The URL is not valid on this domain.
    </div>
  );
}

export default TodoApp;