import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html { font-size: 100%; }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  :root {
    --color-white: #fff;
    --color-eminence: #633a82;
    --color-turquoise: #40e0d0;
    --color-astronaut: #27496d;
  }
`
