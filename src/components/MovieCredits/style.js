import styled from 'styled-components'
import { mediaQuery } from '../../tools'

export const MovieCredits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 0;
  margin: 4rem 0 2rem;

  ${mediaQuery.tablet(`
    grid-template-columns: repeat(4, 1fr);
  `)}

  ${mediaQuery.desktop(`
    grid-template-columns: repeat(6, 1fr);
  `)}
`

export const MovieCreditsTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 800;
  color: #222;
  display: inline-block;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0;

  ${mediaQuery.tablet(`
    font-size: 3.4rem;
  `)}

  ${mediaQuery.desktop(`
    font-size: 5.6rem;
  `)}
`

export const MovieCreditsItem = styled.div`
  position: relative;
`

export const MovieCreditsName = styled.p`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;

  span {
    color: #f1f1f1;
    background-color: #222;
    padding: 0.2rem 0;
  }
`

export const MovieCreditsCharacter = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;
  display: inline-block;

  span {
    background-color: #222;
    color: #00e0ff;
    padding: 0.2rem 0;
    line-height: 1.5;
    font-weight: 600;
  }
`

export const MovieCreditsPhoto = styled.div`
  background-color: rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
  }
`

export const MovieCreditsPhotoInfo = styled.div`
  position: absolute;
  left: 0.5rem;
  bottom: 0.5rem;
  padding: 0.5rem;
`
