import styled, { createGlobalStyle } from "styled-components";

export const AppWidth = styled.div`
  min-width: 1680px;
`;

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
    width: 100vw;
    
    display: flex;
    justify-content: center;
  }
`;
