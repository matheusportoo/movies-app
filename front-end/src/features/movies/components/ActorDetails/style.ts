import styled from 'styled-components'
import { mediaQuery } from '@/shared/utils/media-query'

export const ActorDetailsProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;

  ${mediaQuery.tabletDesktop(`
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  `)}
`

export const ActorDetailsPhoto = styled.div`
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  max-width: 28rem;

  img {
    width: 100%;
    display: block;
  }
`

export const ActorDetailsInfo = styled.div`
  flex: 1;
`

export const ActorDetailsTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 900;
  color: var(--color-highlight);
  display: inline-block;
  line-height: 1.2;
  margin-top: 0;

  ${mediaQuery.tablet(`
    font-size: 4.4rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 6.6rem;
  `)}
`

export const ActorDetailsMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  p {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--color-dark);

    span {
      font-size: 1.2rem;
      background-color: var(--color-highlight);
      padding: 4px;
      display: inline-block;
      line-height: 1;
    }

    span:last-child {
      font-size: 1.4rem;
      margin-top: 0.2rem;
      font-weight: 900;
    }
  }

  ${mediaQuery.tabletDesktop(`
    p span:last-child {
      font-size: 1.6rem;
    }
  `)}
`

export const ActorDetailsText = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;
  color: var(--color-light);
  margin-top: 2rem;
`
