import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    vertical-align: baseline;
    box-sizing: border-box;
    user-select: none;
    font: inherit;
    padding: 0;
    margin: 0;
    border: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body, button, input, select, textarea {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
    text-align: left;
    direction: ltr;
  }

  body {
    font-family: sans-serif;
    background-color: rgb(${colors.light});
    color: rgb(${colors.dark});
    letter-spacing: normal;
    font-style: normal;
    line-height: 18px;
    font-weight: 400;
    font-size: 14px;
  }

  body {
    min-width: 320px;
  }

  a {
    transition: color .15s ease-in-out;
    color: rgb(${colors.primary});
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: rgb(${colors.primaryDark});
    }
  }

  #root {
    flex-direction: column;
    align-items: stretch;
    position: relative;
    display: flex;
  }
`;

export default GlobalStyle;
