import React, { useEffect } from "react";
import { ModalWrapper } from "./style";
import Button from "../../components/button";

export const Modal = props => {
  useEffect(
    () => {
      if (props.show){
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.body.style.overflow = "auto"
      };
    },
    [props.show],
  );
  return (
    <ModalWrapper
      active={true}
      show={props.show}
      close={props.close}
      iconColor={props.header && props.header.iconColor}
      buttonAlign={props.footer && props.footer.footerAlign}
      bigTitle={props.header && props.header.bigTitle}
    >
      <div className="overlay" onClick={props.loading? () => false : () => props.closeHandler()} />

      <div className="modal-container">

        {props.header &&
          <div className="modal-header">
            <i
              className="modal-close-icon flaticon-multiply no-select"
              onClick={() => props.closeHandler()}
            />
          </div>
        }
        <div className="modal-body">{props.children || props.body}</div>
        {props.footer && (
          <div className="modal-footer">
            {props.footer.buttons &&
              props.footer.buttons.map((items, key) => (
                <React.Fragment key={key}>
                  <Button
                    btn={items.buttonType}
                    onClick={e => items.clickHandler(e)}
                    loading={props.loading}
                  >
                    {items.buttonText}
                  </Button>
                  {(props.footer.buttons && props.footer.buttons.length - 1) !==
                  key ? (
                    <div className="button-separator" />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};
