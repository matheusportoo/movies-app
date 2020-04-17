import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const CardMovie = styled.div`
  font-size: 0;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  border-radius: 5px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-black);
  width: 100%;

  a {
    text-decoration: none;
    display: block;
  }
`

export const CardMovieImage = styled.div`
  background-color: var(--color-dark);
  position: relative;
  width: 100%;
  padding-top: 150.2%;
  height: 0;
  overflow: hidden;

  &:hover {
    &::after { opacity: 0.2; }
  }

  &::after {
    content: '';
    background-color: var(--color-highlight);
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 100%;
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
    color: var(--color-light);

    span {
      font-size: 1rem;
      display: inline-block;
      line-height: 1;
    }

    span:last-child {
      font-size: 1.2rem;
      margin-top: 0.2rem;
      color: var(--color-highlight);
      font-weight: 900;
    }
  }

  ${mediaQuery.desktop(`
    p span:last-child {
      font-size: 1.2rem;
    }
  `)}

  ${mediaQuery.desktop(`
    p span:last-child {
      font-size: 1.6rem;
    }
  `)}
`
