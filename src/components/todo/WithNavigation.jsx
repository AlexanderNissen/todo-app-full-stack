import { useNavigate } from "react-router-dom";

// props are unpacked into component and navigate attribute/prop is added to component
function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()}/>;
}

export default withNavigation;