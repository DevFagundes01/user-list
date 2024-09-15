import PropTypes from "prop-types";
import { DefaultTitle } from "./styles";

function Title({ children }) {
	return <DefaultTitle>{children}</DefaultTitle>;
}

Title.prototype = {
	children: PropTypes.node.isRequired,
};

export default Title;
