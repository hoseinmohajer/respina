import styled from 'styled-components';
import {colors} from '../../../../../constants/colors';

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.profile-icon {
		width: 32px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		&:before {
			font-size: 20px;
			margin: 0;
			color: ${colors.gray};
		}
	}
`;

export const UserName = styled.div`
	color: ${colors.gray};
	font-size: 16px;
	@media only screen and (max-width: 767px) {
    display: none;
  }
`;