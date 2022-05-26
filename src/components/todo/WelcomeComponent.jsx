import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component {
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
      </>
    );
  }
}


export default WelcomeComponent;