import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const StatusCode = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 8.0rem;
  padding-top: 8.0rem;
  width: 100%;
`

export const StatusCodeWrapper = styled.div`
  display: inline-block;
  text-align: center;
`

export const Title = styled.h2`
  color: var(--color-highlight);
  font-size: 12.8rem;
  font-weight: 800;
  margin-bottom: 0;
  margin-top: 0;

  ${mediaQuery.desktop(`
    font-size: 20.8rem;
  `)}
`

export const Message = styled.p`
  color: var(--color-light);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 1rem;

  ${mediaQuery.desktop(`
    font-size: 2.0rem;
  `)}
`

export const Button = styled.span`
  display: inline-block;
  margin-top: 5rem;

  a {
    padding: 0.6rem 1rem;
    background-color: var(--color-highlight);
    color: var(--color-dark);
    text-decoration: none;
    font-size: 1.6rem;
  }
`;
