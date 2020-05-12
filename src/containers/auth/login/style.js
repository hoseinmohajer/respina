import styled, {createGlobalStyle} from 'styled-components';
import { colors } from '../../../constants/colors';

export const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const FormContainer = styled.div`
	min-width: 290px;
	max-width: 426px;
	min-height: 270px;
	border-radius: 8px;
	background-color: ${colors.white};
	padding: 32px 16px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;
