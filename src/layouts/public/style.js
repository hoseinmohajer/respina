import styled, {createGlobalStyle} from 'styled-components';
import { colors } from '../../constants/colors';

export const PublicContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const GlobalStyle = createGlobalStyle`
    html, body{
      background-color: ${colors.white};
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    * {
    	text-decoration: none;
    	outline: 0;
    	direction: rtl;
    }
`;