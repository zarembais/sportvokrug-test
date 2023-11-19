import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    height: 100vh;
  }
  
  #root {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    background: #12203E;
    font-family: Open-Sans, sans-serif;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
