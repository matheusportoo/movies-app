import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_PATH } from '../../constants'
import { getDateFormated } from '../../tools'
import AverageGrade from '../AverageGrade'
import * as S from './style'

const CardMovie = ({ posterPath, title, href, releaseDate, voteAverage }) => {
  return (
    <S.CardMovie>
      <Link to={href}>
        <S.CardMovieImage
          src={`${IMAGE_PATH('poster')}${posterPath}`}
          alt={title}
        />
        <S.CardMovieInfo>
          <p>
            <span>release date:</span><br />
            <span>{getDateFormated(releaseDate)}</span>
          </p>
          <AverageGrade value={voteAverage} />
        </S.CardMovieInfo>
      </Link>
    </S.CardMovie>
  )
}

export default CardMovie
