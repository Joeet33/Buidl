import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Anek Devanagari', sans-serif;
      background-color: rgba(136, 49, 0, 0.2);
      font-family: 'Oswald', sans-serif;
    }`;
