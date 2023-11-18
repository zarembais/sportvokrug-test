import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    min-height: 20vh;
    min-width: 20wh;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #12203E;
    font-family: Open-Sans, sans-serif;
  }
`;

export default GlobalStyle;