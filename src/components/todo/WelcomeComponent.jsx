import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: '',
      responseSuccessful: false,
      responseFailed: false
    }

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div className="container">
          {this.state.responseFailed && <div className='alert alert-warning'>{this.state.welcomeMessage}</div>}
          {this.state.responseSuccessful && <div className='alert alert-success'>{this.state.welcomeMessage}</div>}
          Welcome {this.props.params.name} <br/>
          You can manage your todos <Link to='/todos'>here</Link>.
          {/*
          We could also use <a href="/todos" here, but it would cause the page to be reloaded.
            We want to avoid this for a SPA (single page application)
          */}
        </div>

        <div>
          Click here to get a customized welcome message.
          <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get welcome message</button>
        </div>
      </>
    );
  }

  retrieveWelcomeMessage() {
    // HelloWorldService.executeHelloWorldService()
    // .then(response => this.handleSuccessfulResponse(response)) // Successful response

    // HelloWorldService.executeHelloWorldBeanService()
    // .then(response => this.handleSuccessfulResponse(response))

    HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
    .then(response => this.handleSuccessfulResponse(response))
    .catch(error => this.handleError(error))
  }

  handleSuccessfulResponse(response) {
    console.log(response.data)
    this.setState({
      welcomeMessage: response.data.message,
      responseSuccessful: true
    })
  }

  handleError(error) {
    console.log(error); // May be undefined
    let errorMessage = ""

    if (error.message) { // No response is returned if network error or no auth -> error.message is null
      errorMessage += error.message
    }

    if (error.response && error.response.data) { // 
      errorMessage += error.response.data.message
    }
    this.setState({
      welcomeMessage: errorMessage,
      responseFailed: true
    })
  }
}


export default WelcomeComponent;