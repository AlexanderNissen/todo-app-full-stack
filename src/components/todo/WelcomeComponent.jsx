import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/HelloWorldService';

class WelcomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: ''
    }

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div className="container">
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

        <div>
          {this.state.welcomeMessage}
        </div>
      </>
    );
  }

  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService()
    .then(response => this.handleSuccessfulResponse(response)) // Successful response
    // .catch()
  }

  handleSuccessfulResponse(response) {
    this.setState({
      welcomeMessage: response.data
    })
  }
}


export default WelcomeComponent;