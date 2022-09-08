import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

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
        <h1>Login</h1>
        <div className="container">
          {/* If this.state.loginFailed is true, we call the ShowLoginFailedMessage function */}
          {this.state.hasLoginFailed && <div className="alert alert-warning">Login failed</div>}
          {this.state.showSuccessMessage && <div>Login successful</div>}
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>

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
    // if((this.state.username==='Alexander' || this.state.username==='Error') && this.state.password==='Nissen') {
    //   AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
    //   this.props.navigate(`/welcome/${this.state.username}`)
    // }
    // else {
    //   console.log("Failed")
    //   this.setState({
    //     showSuccessMessage: false,
    //     hasLoginFailed: true
    //   });
    // }

    // No hard coding
    AuthenticationService
    .executeBasicAuthService(this.state.username, this.state.password)
    .then(
      () => {
        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        this.props.navigate(`/welcome/${this.state.username}`)
      }
    )
    .catch(
      () => {
        this.setState({
          showSuccessMessage: false,
          hasLoginFailed: true
        });
      }
    )
  }
}

export default LoginComponent;