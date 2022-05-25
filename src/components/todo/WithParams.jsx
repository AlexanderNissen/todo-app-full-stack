import { useParams } from 'react-router-dom';

// Decorates a component
// '...' spreads out "own" properties into the component
// Say we have an Element <Modal> with a: 1, b: 2, then
// <Modal {...this.props} >
// is equal to
// <Modal a={this.props.a}, b={this.props.b}>
function withParams(Component) {
  return props => <Component {...props} params={useParams()}/>
}

export default withParams;