import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  body {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #12203E;
    font-family: Open-Sans, sans-serif;
  }
`;

export default GlobalStyle;
