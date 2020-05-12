import styled from "styled-components";
import {colors} from "../../constants/colors";

export const Box = styled.div`
  width: 100%;
  button {
    width: 100%;
    min-width: 60px;
    border: none;
    text-align: center;
    border-radius: 4px;
    transition: 0.2s;
    padding: 8px 16px 10px 16px;
    cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
    font-weight: bold;
    font-size: 16px;
    background-color: ${colors.green};
    color:${colors.white};
    &:hover{
        box-shadow: 0 2px 8px 0 #CCCCCC;
    }
    &:disabled{
        background-color: ${colors.gray_light};
        color:${colors.white};
        cursor:not-allowed;
        &:hover{
            box-shadow: none;
        }
    }
    position: relative;
`;
export const Loading = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: absolute;
  right: calc(50% - 9px);
  top: calc(50% - 9px);
`;
export const Children = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`;