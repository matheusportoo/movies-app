import styled from 'styled-components'

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

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: calc(50% - 4rem);
    margin: 2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: calc(33.33% - 4rem);
    margin: 2rem;
  }

  @media screen and (min-width: 1025px) {
    max-width: calc(25% - 4rem);
  }
`

export const CardMovieImage = styled.img`
  max-width: 100%;
`
