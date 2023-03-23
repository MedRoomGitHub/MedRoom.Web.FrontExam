import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;	
  }

  html {
    background-color: #141D2F;
  }

  a {
    text-decoration: none;
  }
`