import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const MovieDetailsBackPage = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;

  a {
    background-color: #222;
    display: inline-block;
    padding: 1.2rem;
    color: #00e0ff;
    text-decoration: none;
    font-size: 1.2rem;
  }
`

export const MovieDetailsHighlight = styled.div`
  background-color: rgba(0,0,0,0.05);
  margin-left: -2rem;
  margin-right: -2rem;
`

export const MovieDetailsHighlightWrapper = styled.div`
  position: relative;
  width: auto;
  height: 0;
  padding-top: 56.2%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`

export const MovieDetailsInfo = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`

export const MovieDetailsTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 800;
  color: #222;
  display: inline-block;
  line-height: 1.2;
  margin-top: 0;

  ${mediaQuery.tablet(`
    font-size: 4.4rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 6.6rem;
  `)}
`

export const MovieDetailsText = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;

  ${mediaQuery.desktop(`
    max-width: 75%;
  `)}
`

export const MovieDetailsRelease = styled.div`
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

