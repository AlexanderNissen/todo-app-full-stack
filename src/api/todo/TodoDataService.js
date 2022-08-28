import axios from 'axios';

class TodoDataService {

  retrieveAllTodos(username) {
    return axios.get(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return axios.get(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  //createTodo()
}

export default new TodoDataService();