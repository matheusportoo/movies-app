import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { IMAGE_PATH } from '../../constants'
import { getDateFormated } from '../../tools'
import AverageGrade from '../AverageGrade'
import * as S from './style'

function Placeholder() {
  return (
    <S.CardMovie>
      <S.CardMovieImage />
      <S.CardMovieInfo />
    </S.CardMovie>
  )
}

const CardMovie = ({ posterPath, title, href, releaseDate, voteAverage, isFetching }) => {
  return isFetching
    ? (<Placeholder />)
    : (<S.CardMovie>
        <NavLink to={href}>
          <S.CardMovieImage>
            { posterPath && <picture>
                <source srcset={`${IMAGE_PATH('poster2x')}${posterPath}`} media='(min-width: 1170px)' />
                <img srcset={`${IMAGE_PATH('poster')}${posterPath}`} alt={title} />
            </picture>
            }
          </S.CardMovieImage>

          <S.CardMovieInfo>
            <p>
              <span>release date:</span><br />
              <span>{getDateFormated(releaseDate)}</span>
            </p>
            <AverageGrade value={voteAverage} />
          </S.CardMovieInfo>
        </NavLink>
      </S.CardMovie>)
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
