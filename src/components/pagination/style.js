import styled from 'styled-components';
import {colors} from "../../constants/colors";

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
`;
export const CurrentPageContainer = styled.div`
	width: 50px;
	height: 50px;
	border: 1px solid ${colors.gray};
	color: ${colors.black};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: ${colors.black};
	margin-left: 8px;
`;
export const TotalPages = styled.div`
	font-size: 18px;
	color: ${colors.black_light};
	margin-left: 8px;
`;

export const Icon = styled.div`
	cursor: pointer;
	i {
		border: 1px solid ${colors.gray};
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		&:before {
			margin-left: 0;
			font-size: 18px;
			color: ${colors.black};
		}
	}
`;
export const Next = styled(Icon)``;
export const Prev = styled(Icon)``;