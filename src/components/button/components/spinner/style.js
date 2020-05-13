import styled from "styled-components";
import {colors} from "../../../../constants/colors";


const TYPES = {
  primary: {main : colors.green, second: colors.white},
  secondary: {main:colors.gray ,second: colors.gray_light},
};
export const SpinnerContainer = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 1.8em;
    height: 1.8em;
  }
  .loader {
    margin: 0px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: ${props => props.type ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " +  colors.green};
    border-right: ${props => props.type  ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + colors.green};
    border-bottom:${props => props.type  ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + colors.green};
    border-left: ${props => props.type  ? "0.3em solid " + TYPES[props.type].second : "0.3em solid " + colors.white};
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;