import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const AuthorizedContainer = styled.div`
	width: 100%;
	background-color: ${colors.white};
	.inner-container {
		height: 100vh;
		padding: 16px 64px;
		margin: 0 auto;
		width: 100%;
		max-width: 1600px;
	}
	@media only screen and (max-width: 767px) {
    .inner-container {
			padding: 16px 8px;
		}
  }
`;