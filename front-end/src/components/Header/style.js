import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const Header = styled.header`
  margin-bottom: 4rem;
`

export const TopBar = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-dark);
  text-align: right;
`

export const BottomBar = styled.div`
  background-color: var(--color-black);
  border-bottom: 1px solid var(--color-dark);
  padding: 1.5rem 0;

  div {
    position: relative;
  }

  ${mediaQuery.desktop(`
    font-size: 2rem;
  `)}
`

export const Logo = styled.h1`
  display: block;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
  font-family: var(--font-family-default);
  font-weight: 900;
  font-size: 1.8rem;

  a {
    color: var(--color-highlight);
    text-decoration: none;
  }

  ${mediaQuery.desktop(`
    font-size: 2rem;
  `)}
`

export const GoBack = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  color: var(--color-highlight);
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: none;

  svg {
    width: 24px;
    height: 24px;

    ${mediaQuery.desktop(`
      width: 28px;
      height: 28px;
    `)}
  }
`
