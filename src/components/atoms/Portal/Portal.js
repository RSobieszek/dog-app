import ReactDOM from "react-dom";
import { oneOfType, arrayOf, node } from "prop-types";

const portalRoot = document.getElementById("portal");

function Portal({ children }) {
  return ReactDOM.createPortal(children, portalRoot);
}

Portal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Portal;
