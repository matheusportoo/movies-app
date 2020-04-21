import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const Footer = styled.footer`
  text-align: center;
  margin-top: 4rem;
`

export const CreatedBy = styled.small`
  border-top: 1px solid var(--color-dark);
  padding: 1.5rem 0;
  font-size: 1.2rem;
  color: var(--color-light);
  display: block;

  ${mediaQuery.desktop(`
    font-size: 1.4rem;
  `)}

  a {
    color: var(--color-highlight);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
