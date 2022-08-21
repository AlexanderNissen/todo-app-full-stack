import React, {Component} from 'react';
import LoginComponent from './LoginComponent.jsx';
import './LoginComponent.css';
import WelcomeComponent from './WelcomeComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import TodoComponent from './TodoComponent.jsx';
import withParams from './WithParams.jsx';
import withNavigation from './WithNavigation.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent)
    const WelcomeComponentWithParams = withParams(WelcomeComponent)
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent)
    const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithNavigation/>
            <Routes>
                <Route path="/" element={<LoginComponentWithNavigation/>}/>
                <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                <Route path="/welcome/:name" element={
                <AuthenticatedRoute>
                  <WelcomeComponentWithParams/>
                </AuthenticatedRoute>
                }/>
                <Route path="/todos/:id" element={
                  <AuthenticatedRoute>
                    <TodoComponentWithParamsAndNavigation/>
                  </AuthenticatedRoute>
                }/>
                <Route path="/todos" element={
                <AuthenticatedRoute>
                  <ListTodosComponentWithNavigation/>
                </AuthenticatedRoute>
                }/>
                <Route path="/logout" element={
                <AuthenticatedRoute>
                  <LogoutComponent/>
                </AuthenticatedRoute>
                }/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
          <FooterComponent/>
        </Router>
      </div>
    );
  }
}

export default TodoApp;