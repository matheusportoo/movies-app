import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const ListingCardsMovie = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;

  ${mediaQuery.mobile(`
    grid-template-columns: repeat(2, 1fr)
  `)}

  ${mediaQuery.tablet(`
    grid-template-columns: repeat(3, 1fr)
  `)}

  ${mediaQuery.desktop(`
    grid-template-columns: repeat(5, 1fr)
  `)}
`
