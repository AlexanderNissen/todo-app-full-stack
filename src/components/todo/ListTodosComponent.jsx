import { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        // {id: 1, description: 'Learn computer architecture', done: false, targetDate: new Date()},
        // {id: 2, description: 'Learn React', done: false, targetDate: new Date()},
        // {id: 3, description: 'Learn Spring Boot', done: false, targetDate: new Date()}
      ]
    }
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUsername()
    TodoDataService.retrieveAllTodos(username)
      .then(
        response => {
          // 
          console.log(response)
          this.setState({todos: response.data})
        }
      )
  }

  render() {
    return (
    <div className="container">
      <h1>List Todos</h1>
      <div className="table">
        <table>
          <thead>
            <tr key="header">
              <th>Description</th>
              <th>Completed?</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map (
                todo =>  
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.isDone.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
              )
            }
          </tbody>
        </table>

      </div>
    </div>
    );
  }
}

export default ListTodosComponent;