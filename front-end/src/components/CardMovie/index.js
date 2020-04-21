import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { IMAGE_PATH } from '../../constants'
import { getDateFormated } from '../../tools'
import AverageGrade from '../AverageGrade'
import * as S from './style'

const CardMovie = ({ posterPath, title, href, releaseDate, voteAverage }) => {
  return (
    <S.CardMovie>
      <NavLink to={href}>
        <S.CardMovieImage>
          <img
            src={`${IMAGE_PATH('poster')}${posterPath}`}
            alt={title}
          />
        </S.CardMovieImage>

        <S.CardMovieInfo>
          <p>
            <span>release date:</span><br />
            <span>{getDateFormated(releaseDate)}</span>
          </p>
          <AverageGrade value={voteAverage} />
        </S.CardMovieInfo>
      </NavLink>
    </S.CardMovie>
  )
}

CardMovie.propTypes = {
  value: PropTypes.number,
  posterPath: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number
}

export default CardMovie
