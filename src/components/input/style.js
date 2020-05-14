import styled from 'styled-components';
import {colors} from "../../constants/colors";

export const InputContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;
export const Label = styled.div`
	width: 100%;
	font-size: 14px;
	color: ${colors.gray};
	margin-bottom: 8px;
	label {
		width: 100%;
	}
`;
export const Input = styled.div`
	width: 100%;
	border: ${props => (props.error) ?
		`1px solid ${colors.red}` :
		`1px solid ${colors.gray_light}`
	};
	border-radius: 8px;
	font-size: 16px;
	input {
		width: 100%;
		height: 45px;
		border-radius: 8px;
		border: 0;
		padding: 8px 12px;
		direction: ${props => {
			switch (props.type) {
				case 'email':
					return `ltr`;
				case 'number':
					return `ltr`;
				default:
					return 'rtl';
			}	
		}};
	}
`;
export const Error = styled.div`
	margin-top: 8px;
	width: 100%;
	font-size: 12px;
	color: ${colors.red};
`;