import React from "react";
import { Box, Loading, Children } from "./style";
import { Spinner } from "./components/spinner";

export default props => {
	const {borderless, loading, ...other} = props;
	return (
		<Box btn={props.btn} borderless={(borderless)} active={props.active}>
			<button
				{...other}
				onClick={
					!loading
						? props.onClick
						: e => {
							e.preventDefault();
							return false;
						}
				}
				disabled={props.disabled}
			>
				<Loading show={(loading)}><Spinner/></Loading>
				<Children show={(!loading)}>{props.children}</Children>
			</button>
		</Box>
	);
};
