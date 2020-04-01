import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const ListingMoviesByCategory = styled.div``;
export const ListingMoviesByCategoryTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 800;
  color: #00e0ff;
  display: inline-block;
  line-height: 1;
  margin-top: 0;
  background-color: #222;
  padding: 1rem;

  ${mediaQuery.tablet(`
    font-size: 4.4rem;
    padding: 2rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 6.6rem;
    padding: 2rem;
  `)}
`

export const ListingMoviesByCategoryMovies = styled.div`
  ${mediaQuery.mobileTablet(`
    margin: 0 -2rem;
    overflow: auto;
    padding: 2rem;
    -webkit-overflow-scrolling: touch;
  `)}
`

