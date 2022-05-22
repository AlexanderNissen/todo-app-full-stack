import React, {Component} from 'react';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: 'test',
      password: '',
      loginFailed: false,
      loginSucceeded: false
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  
  render() {
    return(
      <div>
        {/* If this.state.loginFailed is true, we call the ShowLoginFailedMessage function */}
        <ShowLoginFailedMessage loginFailed={this.state.hasLoginFailed} />
        <ShowLoginSuccessMessage loginSucceeded={this.state.showSuccessMessage} />
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.loginClicked}>Login</button>
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

  loginClicked() {
    // hardcoded authentication
    if(this.state.username==='Alexander' && this.state.password==='Nissen') {
      console.log("Login successful")
      this.setState({
        showSuccessMessage: true,
        hasLoginFailed: false
      });
    }
    else {
      console.log("Failed")
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true
      });
    }
  }
}

function ShowLoginFailedMessage(props) {
  if(props.loginFailed) {
    return <div>Login failed - invalid credentials</div>;
  }
  return null;
}

function ShowLoginSuccessMessage(props) {
  if(props.loginSucceeded) {
    return <div>Login successful</div>;
  }
  return null;
}

export default LoginComponent;