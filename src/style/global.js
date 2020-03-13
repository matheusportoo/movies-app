import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html { font-size: 62.5%; }

  body {
    margin: 4rem 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family-default);
    background: linear-gradient(90deg, #3F5EFB 0%, #00e0ff 100%);
  }

  :root {
    --color-wild-sand: #f5f5f5;
    --color-white: #fff;
    --color-eminence: #633a82;
    --color-turquoise: #40e0d0;
    --color-astronaut: #27496d;

    --font-family-default: 'Lato', 'Arial', 'Sans-serif';
    --font-size-default: 10px;
  }
`
