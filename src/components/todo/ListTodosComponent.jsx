import { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
import moment from 'moment';
import '../../bootstrap.css'

class ListTodosComponent extends Component {
  constructor(props) {
    console.log('constructor')
    super(props);

    this.state = {
      todos: [],
      message: null
    }
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return true;
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.refreshTodos();
  }

  refreshTodos() {
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

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUsername();
    // console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id)
      .then(
        response => {
          this.setState({message: `Deletion of todo ${id} successful`});
          this.refreshTodos();
        }
      )
  }

  updateTodoClicked(id) {
    console.log('update ' + id);
    this.props.navigate(`/todos/${id}`);
  }

  addTodoClicked() {
    this.props.navigate(`/todos/-1`)
  }

  render() {
    console.log('render')
    return (
    <div className="container">
      <h1>List Todos</h1>
      {this.state.message && <div className='alert alert-success'>{this.state.message}</div>}
      <div className="table">
        <table>
          <thead>
            <tr key="header">
              <th>Description</th>
              <th>Completed?</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map (
                todo =>  
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.isDone.toString()}</td>
                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                    <td><button className='btn btn-success' onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                    <td><button className='btn btn-warning' onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                  </tr>
              )
            }
          </tbody>
        </table>
        <div className="row">
          <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
        </div>
      </div>
    </div>
    );
  }
}

export default ListTodosComponent;