import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const SearchBar = styled.div`
  position: absolute;
  right: 0;
  top: 35px;
  z-index: var(--z-index-search-bar);
  width: auto;
  font-size: 0;
  left: 0;

  ${mediaQuery.desktop(`
    top: 40px;
    left: 0;
    right: 0;
    width: 100%;
  `)}

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    right: 0;
    z-index: -1;
  }
`

export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
  background-color: var(--color-dark);
  padding: 2rem;
  height: 10.5rem;
  align-items: center;
  width: 100%;
`

export const SearchBarInput = styled.input`
  width: 100%;
  background-color: var(--color-black);
  border: 1px solid var(--color-highlight);
  height: 100%;
  color: var(--color-highlight);
  font-size: 1.6rem;
  padding: 0 6rem 0 1rem;

  ${mediaQuery.desktop(`
    padding: 0 8rem 0 1rem;
  `)}
`

export const SearchBarButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 24px;
  height: 24px;
  color: var(--color-highlight);
  cursor: pointer;
  position: absolute;
  right: 3.5rem;

  ${mediaQuery.desktop(`
    width: 56px;
    height: 56px;
    right: 2.5rem;
  `)}

  svg {
    width: 24px;
    height: 24px;

    ${mediaQuery.desktop(`
      width: 28px;
      height: 28px;
    `)}
  }
`
