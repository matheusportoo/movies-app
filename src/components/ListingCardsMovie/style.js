import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const ListingCardsMovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;

  ${mediaQuery.mobile(`
    grid-template-columns: repeat(2, 1fr)
  `)}

  ${mediaQuery.tablet(`
    grid-template-columns: repeat(4, 1fr)
  `)}

  ${mediaQuery.desktop(`
    grid-template-columns: repeat(5, 1fr)
  `)}
`

export const ListingCardsMovieSlider = styled.div`
  ${mediaQuery.mobileTablet(`
    display: flex;

    &::after {
      content: '';
      width: 2rem;
      flex-shrink: 0;
    }
  `)}

  ${mediaQuery.desktop(`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  `)}
`

export const ListingCardsMovieSliderItem = styled.div`
  ${mediaQuery.mobileTablet(`
    flex:none;

    &:not(:first-child) {
      margin-left: 2rem;
    }
  `)}

  ${mediaQuery.mobile(`
    width: calc(50% - 1rem);
  `)}

  ${mediaQuery.tablet(`
    width: calc(25% - 0.5rem);
  `)}
`
