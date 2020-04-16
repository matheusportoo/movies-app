import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const ListingMoviesByCategory = styled.div``;
export const ListingMoviesByCategoryTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--color-highlight);
  display: inline-block;
  line-height: 1;
  margin-top: 0;

  ${mediaQuery.tablet(`
    font-size: 4.4rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 6.6rem;
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

