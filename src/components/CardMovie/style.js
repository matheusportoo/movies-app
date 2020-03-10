import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const CardMovie = styled.div`
  font-size: 0;
  display: inline-block;
  vertical-align: top;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 2rem 0.2rem;
  border-radius: 4px;
  overflow: hidden;

  a {
    text-decoration: none;
    display: inline-block;
  }
`

export const CardMovieImage = styled.img`
  max-width: 100%;
  opacity: 0.95;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

export const CardMovieInfo = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-top: 0;
    margin-bottom: 0;
    color: #f1f1f1;

    span {
      font-size: 1rem;
      background-color: #222;
      padding: 4px;
      display: inline-block;
      line-height: 1;
    }

    span:last-child {
      font-size: 1.2rem;
      margin-top: 0.2rem;
      color: #00e0ff;
      font-weight: 800;
    }
  }

  ${mediaQuery.tabletDesktop(`
    p span:last-child {
      font-size: 1.6rem;
    }
  `)}
`
