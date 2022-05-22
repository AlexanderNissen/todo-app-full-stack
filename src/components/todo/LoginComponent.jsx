import React, {Component} from 'react';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: 'test',
      password: ''
    }
    
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  
  render() {
    return(
      <div>
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <button>Login</button>
      </div>
    );
  }

  // The change in a HTML element is registered as an event (more precisely: synthetic event) in React terms, which we pass to the method
  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
}

export default LoginComponent;