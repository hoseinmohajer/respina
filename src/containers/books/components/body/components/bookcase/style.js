import styled from 'styled-components';
import {colors} from "../../../../../../constants/colors";

export const BookcaseContainer = styled.div`
	width: calc(100% - 300px);
	max-width: calc(100% - 300px);
	padding: 0 32px 0 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	@media only screen and (max-width: 767px) {
    width: 100%;
		max-width: 100%;
		padding: 0 8px 0 0;
		justify-content: center;
		align-items: center;
  }
`;
export const Card = styled.div`
	cursor: pointer;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 185px;
	margin-bottom: 40px;
	margin-left: 8px;
	&:last-child {
		margin-left: 0;
	}
	.card-image {
		-webkit-box-shadow: 1px 18px 25px -5px gray;
	  -moz-box-shadow: 1px 18px 25px -5px gray;
	  box-shadow: 1px 18px 25px -5px gray;
	  margin-bottom: 24px;
	  width: 180px;
		height: 266px;
	}
	.card-description {
		width: 100%;
		.title {
			text-align: center;
			font-weight: bold;
			font-size: 18px;
			margin-bottom: 5px;
			color: ${colors.black_light};
		}
		.text {
			text-align: center;
			font-size: 14px;
			color: ${colors.gray};
		}
	}
	@media only screen and (max-width: 767px) {
		width: 100%;
		max-width: 300px;
		margin-left: 16px;
    .card-image {
		  width: 100%;
		  height: 400px;
		}
  }
`;