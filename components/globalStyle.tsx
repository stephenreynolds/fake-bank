import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background-color: #eee;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }
`;

export const theme = {

};