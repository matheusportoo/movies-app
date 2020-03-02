import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const Title = styled.h1`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  background-color: var(--color-eminence);
  color: var(--color-turquoise);
  padding: 2rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;

  strong {
    color: var(--color-white);
    font-weight: strong;
  }

  ${mediaQuery.desktop(`
    background: var(--color-astronaut);
  `)}
`
