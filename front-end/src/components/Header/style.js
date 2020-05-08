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
  height: 5rem;

  > div {
    position: relative;
    min-height: 100%;

    ${mediaQuery.mobileTablet(`
      margin: 0;
    `)}
  }

  ${mediaQuery.desktop(`
    font-size: 2rem;
    height: 5.6rem;
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  a {
    color: var(--color-highlight);
    text-decoration: none;
  }

  ${mediaQuery.desktop(`
    font-size: 2rem;
  `)}
`

export const ActionsButtons = styled.button`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  display: flex;
  color: var(--color-highlight);
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: none;
  width: 60px;
  height: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  ${mediaQuery.desktop(`
    width: 56px;
    height: 56px;
  `)}

  svg {
    width: 26px;
    height: 26px;

    ${mediaQuery.desktop(`
      width: 28px;
      height: 28px;
    `)}
  }
`

export const GoBackButton = styled(ActionsButtons)`
  left: 0;
`

export const SearchButton = styled(ActionsButtons)`
  right: 0;
  background-color: ${({ isOpenForm }) => isOpenForm ? 'var(--color-dark)' : ''};
`
