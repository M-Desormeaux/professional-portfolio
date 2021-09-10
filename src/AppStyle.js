import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    padding: 0;
    margin: 0;
  }

  body {
    min-height: 100vh;
    width: 100%;
    
    display: flex;
    justify-content: center;
  }
`;
