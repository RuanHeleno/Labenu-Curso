import { createGlobalStyle } from "styled-components";

import Bg from "../Assets/bg.png";
import daesang from "../Assets/fonts/DaesangSpaceRegular.otf";

const GlobalStyle = createGlobalStyle` 
  :root {
    --font-title: 'Daesang';
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: 'Daesang';
    src: url(${daesang}) format('OpenType');
  }
  
  body {
    background: url(${Bg}) no-repeat center center;
    background-size: cover;
    max-width: 100vw;
    color: white;
    font-family: 'Cabin', sans-serif;
    font-weight: 400;
    font-size: 18px;
    aspect-ratio: 1;
  }

  button {
    font-family: inherit;
    color: inherit;
  }
`;

export default GlobalStyle;
