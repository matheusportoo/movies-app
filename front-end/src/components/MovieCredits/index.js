import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'
import { IMAGES } from '../../constants'

const MovieCredits = ({ cast }) => {
  return (
    <>
      <S.MovieCreditsTitle>Cast</S.MovieCreditsTitle>
      <S.MovieCredits>
        { cast
          .filter(({ profile_path }) => profile_path)
          .map(({ name, character, profile_path }, index) => (
            <S.MovieCreditsItem
              key={`movie-credits-cast-${index}`}
            >
              <S.MovieCreditsPhoto>
                <img
                  src={`${IMAGES.url}${IMAGES.presets.profile}${profile_path}`}
                  alt={name}
                />

                <S.MovieCreditsPhotoInfo>
                  <S.MovieCreditsName><span>{name}</span></S.MovieCreditsName>
                  <S.MovieCreditsCharacter><span>{character}</span></S.MovieCreditsCharacter>
                </S.MovieCreditsPhotoInfo>
              </S.MovieCreditsPhoto>
            </S.MovieCreditsItem>
          )
        ) }
      </S.MovieCredits>
    </>
  )
}

MovieCredits.propTypes = {
  cast: PropTypes.array
}

export default MovieCredits
