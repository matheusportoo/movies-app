import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const PageHomeListingCategories = styled.section`
  &:not(:first-child) {
    margin-top: 5rem;

    ${mediaQuery.tablet(`
      margin-top: 7.5rem;
    `)}

    ${mediaQuery.desktop(`
      margin-top: 10rem;
    `)}
  }
`
