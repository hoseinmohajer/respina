import styled from "styled-components";
import {colors} from "../../constants/colors";

export const ModalWrapper = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  overflow-y: auto;
  max-height: 100vh;
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .modal-container {
    position: relative;
    z-index: 99999;
    min-width: 473px;
    min-height: 32%;
    border-radius: 8px;
    background-color: ${colors.white};
    .modal-header {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      .modal-close-icon {
        cursor: pointer;
        display: ${props => (props.close === false ? "none" : "flex")};
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        &:before {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
          color: ${colors.gray};
        }
      }
    }
    }
    .modal-body {
      min-height: calc(100%);
      width: 100%;
      padding: 4px 64px 64px 64px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .modal-image {
      	width: 170px;
      	height: 266px;
      	margin-left: 32px;
      }
      .book-content {
      	display: flex;
      	justify-content: flex-start;
      	align-items: flex-start;
      	flex-direction: column;
      	padding-top: 16px;
      	.book-info, .author, .translator, .abstract {
      		color: ${colors.black_light};
      		font-size: 14px;
      	}
      	.author, .translator {
      		margin-right: 16px;
      	}
      	.book-info, .translator {
      		margin-bottom: 16px;
      	}
      	.author {
      		margin-bottom: 8px;
      	}
      	.abstract {
	        h5 {
	        	margin: 0 0 16px 0;
	        }
      		p {
      		 max-width: 500px;
      		 line-height: 1.58;
      		}
      	}
      	
      }
    }
    .modal-footer {
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: ${props => props.buttonAlign || "flex-end"};
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 10px;
      .button-separator {
        width: 8px;
      }
    }
`;
