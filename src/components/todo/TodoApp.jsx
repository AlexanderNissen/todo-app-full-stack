import React, {Component} from 'react';
import LoginComponent from './LoginComponent.jsx';
import './LoginComponent.css';
import WelcomeComponent from './WelcomeComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import withParams from './WithParams.jsx';
import withNavigation from './WithNavigation.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent)
    const WelcomeComponentWithParams = withParams(WelcomeComponent)
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithNavigation/>
            <Routes>
                <Route path="/" element={<LoginComponentWithNavigation/>}/>
                <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>}/>
                <Route path="/todos" element={<ListTodosComponent/>}/>
                <Route path="/logout" element={<LogoutComponent/>}/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
          <FooterComponent/>
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