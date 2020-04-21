import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const ListingMoviesByCategory = styled.div``

export const ListingMoviesByCategoryHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListingMoviesByCategoryTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--color-highlight);
  display: inline-block;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;

  ${mediaQuery.tablet(`
    font-size: 4.4rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 5.6rem;
  `)}
`

export const ListingMoviesByCategoryMovies = styled.div`
  ${mediaQuery.mobileTablet(`
    margin: 0 -2rem;
    overflow: auto;
    padding: 2rem;
    -webkit-overflow-scrolling: touch;
  `)}

  ${mediaQuery.desktop(`
    margin: 4rem 0 0;
  `)}
`

export const ListingMoviesByCategorySeeMore = styled.span`
  font-size: 0;

  a {
    color: var(--color-highlight);
    font-size: 1.2rem;
    text-decoration: none;

    ${mediaQuery.desktop(`
      font-size: 1.6rem;
    `)}
  }
`

