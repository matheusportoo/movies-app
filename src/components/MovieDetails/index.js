import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as S from './style'

import { getDateFormated } from '../../tools'
import { IMAGE_PATH } from '../../constants'
import AverageGrade from '../AverageGrade'

const MovieDetails = ({
  title,
  overview,
  releaseDate,
  backdropPath,
  voteAverage
}) => {
  return (
    <>
      <S.MovieDetailsHighlight>
        <S.MovieDetailsHighlightWrapper>
          <img
            src={`${IMAGE_PATH('backdrop')}${backdropPath}`}
            alt={title}
          />
        </S.MovieDetailsHighlightWrapper>
      </S.MovieDetailsHighlight>

      <S.MovieDetailsBackPage>
        <Link to='/movies' children='« voltar' />
      </S.MovieDetailsBackPage>

      <S.MovieDetailsInfo>
        <S.MovieDetailsTitle>{title}</S.MovieDetailsTitle>
        <S.MovieDetailsRelease>
          <p>
            <span>release date:</span><br />
            <span>{getDateFormated(releaseDate)}</span>
          </p>
          <AverageGrade value={voteAverage} />
        </S.MovieDetailsRelease>
        <S.MovieDetailsText>{overview}</S.MovieDetailsText>
      </S.MovieDetailsInfo>
    </>
  )
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  backdropPath: PropTypes.string,
  voteAverage: PropTypes.number
}

export default MovieDetails
