import styled from 'styled-components'

export const PageMovieDetails = styled.article`
  background-color: var(--color-dark);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const PageMovieDetailsWidget = styled.div`
  &:not(:first-child) {
    margin-top: 4rem;
  }
`
