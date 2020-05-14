import React from "react";
import { SpinnerContainer } from "./style";
export const Spinner = props => {
  return (
        <SpinnerContainer color={props.color} borderless={props.borderless} btn={props.btn} type={props.type}>
          <div className="loader" />
        </SpinnerContainer>
  );
};
