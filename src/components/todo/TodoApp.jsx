import React, {Component} from 'react';
import LoginComponent from './LoginComponent.jsx';
import './LoginComponent.css';
import WelcomeComponent from './WelcomeComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import withParams from './WithParams.jsx';
import withNavigation from './WithNavigation.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent)
    const WelcomeComponentWithParams = withParams(WelcomeComponent)

    return (
      <div className="TodoApp">
        <Router>
          <Routes>
              <Route path="/" element={<LoginComponentWithNavigation/>}/>
              <Route path="/login" element={<LoginComponentWithNavigation/>}/>
              <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>}/>
              <Route path="/todos" element={<ListTodosComponent/>}/>
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