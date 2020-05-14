import styled from "styled-components";
import {colors} from "../../../../../../constants/colors";

export const Wrapper = styled.div`
	.side-bar-button {
		display: none;
		position: absolute;
		right: 8px;
		top: -50px;
		cursor: pointer;
	}
	@media only screen and (max-width: 767px) {
    .side-bar-button {
			display: block;
		}
  }
`;

export const SidebarContainer = styled.div`
	background-color: ${colors.white};
	border: 1px solid ${colors.gray};
	width: 300px;
	@media only screen and (max-width: 767px) {
    display: none;
    position: absolute;
    right: 8px;
    ${props => {
			if (props.status) {
				return `display: block`;
			}
		}};
  }
`;
export const Title = styled.div`
	background-color: ${colors.purple_light};
	color: ${colors.purple};
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;
export const Categories = styled.div`
	padding: 8px 16px;
`;
export const Row = styled.div`
	margin-bottom: 8px;
	&:last-child {
		margin-bottom: 0;	
	}
`;