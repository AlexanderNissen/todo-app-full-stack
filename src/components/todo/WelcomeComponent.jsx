import React, { Component } from 'react';

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome {this.props.params.name}</div>
  }
}


export default WelcomeComponent;