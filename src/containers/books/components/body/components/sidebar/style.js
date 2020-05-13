import styled from "styled-components";
import {colors} from "../../../../../../constants/colors";

export const SidebarContainer = styled.div`
	border: 1px solid ${colors.gray};
	width: 300px;
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