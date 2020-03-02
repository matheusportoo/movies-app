import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const CardMovie = styled.div`
  font-size: 0;
  display: inline-block;
  vertical-align: top;
  max-width: calc(100% - 2rem);
  margin: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 2rem 0.2rem;
  border-radius: 4px;
  overflow: hidden;

  a {
    text-decoration: none;
    display: inline-block;
  }

  ${mediaQuery.mobile(`
    max-width: calc(50% - 4rem);
    margin: 2rem;
  `)}

  ${mediaQuery.tablet(`
    max-width: calc(33.33% - 4rem);
    margin: 2rem;
  `)}

  ${mediaQuery.desktop(`
    max-width: calc(25% - 4rem);
  `)}
`

export const CardMovieImage = styled.img`
  max-width: 100%;
`

export const CardMovieInfo = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 0;
    color: #222;
  }

  ${mediaQuery.tabletDesktop(`
    p {
      font-size: 1.6rem;
    }
  `)}
`
