import { Component } from 'react';

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, description: 'Learn to computer architecture'},
        {id: 2, description: 'Learn React'},
        {id: 3, description: 'Learn Spring Boot'}
      ]
    }
  }

  render() {
    return (
    <div>
      <h1>List Todos</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.todos.map (
              todo =>  
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
    );
  }
}

export default ListTodosComponent;