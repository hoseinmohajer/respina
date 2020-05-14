import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      direction:rtl;
    }
    body {
      margin: 0;
      direction: rtl;
      text-align: right;
      overflow-y: auto;
    }
    
    * {
    	font-family: Number, sans-serif;
    	box-sizing: border-box;
			outline: none !important;
    }
`;
