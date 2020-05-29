import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { IMAGE_PATH } from '../../constants'
import { getDateFormated } from '../../tools'
import AverageGrade from '../AverageGrade'
import * as S from './style'

const CardMovie = ({ posterPath, title, href, releaseDate, voteAverage, isFetching }) => {
  return (
    <S.CardMovie isFetching={isFetching}>
      <NavLink to={href}>
        <S.CardMovieImage>
          { posterPath &&
              <img
                srcSet={`
                  ${IMAGE_PATH('poster')}${posterPath} 1169w
                  ${IMAGE_PATH('poster2x')}${posterPath} 1170w,
                `}
                sizes="(max-width: 1169px) 1169px, 1170px"
                src={`${IMAGE_PATH('poster')}${posterPath}`}
                alt={title}
                loading="lazy"
              />
          }
        </S.CardMovieImage>

        <S.CardMovieInfo isFetching={isFetching}>
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
  voteAverage: PropTypes.number,
  isFetching: PropTypes.bool
}

export default CardMovie
