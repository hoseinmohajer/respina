import React from "react";
import { CheckboxWrapper } from "./style";

export const CheckBox = props => {
  
  return (
    <CheckboxWrapper
      checked={props.checked}
      disabled={props.disabled}
      onClick={() => {
        if (!props.disabled) {
          props.onSelect && props.onSelect();
        }
      }}
    >
      {props.label || props.children}
    </CheckboxWrapper>
  );
};
