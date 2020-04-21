import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html { font-size: 62.5%; }

  body {
    margin: 0 0 4rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family-default);
    background-color: var(--color-black);
  }

  :root {
    /** fonts */
    --font-family-default: 'Lato', 'Arial', 'Sans-serif';
    --font-size-default: 10px;
  }

  :root[data-theme="light"] {
    --color-highlight: #2D73FF;
    --color-dark: #fff;
    --color-light: #111;
    --color-black: #f5f5f5;
  }

  :root[data-theme="dark"] {
    --color-highlight: #00e0ff;
    --color-dark: #222;
    --color-light: #f5f5f5;
    --color-black: #111;
  }
`
