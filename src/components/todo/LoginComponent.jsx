import React, {Component} from 'react';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: 'test',
      password: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    return(
      <div>
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button>Login</button>
      </div>
    );
  }

  // The change in a HTML element is registered as an event (more precisely: synthetic event) in React terms, which we pass to the method
  handleChange(event) {
    console.log(this.state); // prints state prior to change in state in console
    this.setState(
      { [event.target.name]: event.target.value } // [x] converts expression x to string
    );
  }
}

export default LoginComponent;