import styled, {createGlobalStyle} from 'styled-components';
import { colors } from '../../constants/colors';

export const PublicContainer = styled.div`
	background-color: ${colors.purple};
`;
export const GlobalStyle = createGlobalStyle`
	body, html {
		background-color: ${colors.purple};
		padding: 0;
		margin: 0;
	}
`;