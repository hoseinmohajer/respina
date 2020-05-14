import styled from "styled-components";
import {colors} from "../../constants/colors";

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.black};
  font-size: 16px;
  padding-right: 29px;
  position: relative;
  height: 21px;
  cursor: pointer;
  &:hover {
    &:before {
      border-color: ${colors.green};
    }
  }
  &:before {
    content: " ";
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    border: 1px solid;
    ${props => {
      if (props.checked) {
        return `
					border-color: ${colors.green};
					background-color: ${colors.green};
				`;
      } else {
        return `
					border-color: ${colors.gray};
					background-color: ${colors.white};
				`;
      }
    }}
  }
  ${props => {
    if (props.checked) {
      return `
				&:after {
					content: ' ';
					position: absolute;
					right: 7px;
					top: 1px;
					width: 4px;
					height: 12px;
					border-right: 2px solid ${colors.white};
					border-bottom: 2px solid ${colors.white};
					background-color: transparent;
					-webkit-transform: rotate(45deg);
					-moz-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					-o-transform: rotate(45deg);
					transform: rotate(45deg);
				}
			`;
    }
  }}
  ${props => {
    if (props.disabled) {
      return `
      &:before {
        border-color: ${colors.gray_light};
        background-color: ${colors.gray_light};
        opacity: 0.5;
        cursor: default;
      }
      `;
    }
  }}
`;
