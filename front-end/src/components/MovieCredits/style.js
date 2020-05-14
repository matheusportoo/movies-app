import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const MovieCredits = styled.div`
  display: block;
  white-space: nowrap;
  font-size: 0;
  margin: 4rem -2rem 2rem;
  padding: 0 2rem;
  overflow-y: scroll;

  ${mediaQuery.tabletDesktop(`
    display: grid;
    margin: 4rem 0 2rem;
    flex: none;
    overflow: auto;
    white-space: normal;
    padding: 0;
  `)}

  ${mediaQuery.tablet(`
    grid-template-columns: repeat(4, 1fr);
  `)}

  ${mediaQuery.desktop(`
    grid-template-columns: repeat(6, 1fr);
  `)}
`

export const MovieCreditsTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--color-highlight);
  display: inline-block;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0;

  ${mediaQuery.tablet(`
    font-size: 3.4rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 5.6rem;
  `)}
`

export const MovieCreditsItem = styled.div`
  position: relative;
  width: calc(50% - 1rem);
  display: inline-block;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  ${mediaQuery.tabletDesktop(`
    width: 100%;

    &:not(:first-child) {
      margin-left: 0;
    }
  `)}
`

export const MovieCreditsName = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;

  span {
    color: var(--color-light);
    background-color: var(--color-dark);
    padding: 0.2rem 0;
  }
`

export const MovieCreditsCharacter = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;
  display: inline-block;

  span {
    background-color: var(--color-dark);
    color: var(--color-highlight);
    padding: 0.2rem 0;
    line-height: 1.5;
    font-weight: 600;
  }
`

export const MovieCreditsPhoto = styled.div`
  background-color: rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
  }
`

export const MovieCreditsPhotoInfo = styled.div`
  position: absolute;
  left: 0.5rem;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.5rem;
  white-space: normal;
`
