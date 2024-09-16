import PropTypes from "prop-types";
import { DefaultButton } from "./styles";

function Button({ children, theme, ...props }) {
	return (
		<DefaultButton {...props} theme={theme}>
			{children}
		</DefaultButton>
	);
}

Button.prototype = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.string,
};

export default Button;
