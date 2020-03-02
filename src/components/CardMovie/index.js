import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_PATH } from '../../constants'
import * as S from './style'

const CardMovie = ({ posterPath, title, href }) => {
  return (
    <S.CardMovie>
      <Link to={href}>
        <S.CardMovieImage
          src={`${IMAGE_PATH('poster')}${posterPath}`}
          alt={title}
        />
      </Link>
    </S.CardMovie>
  )
}

export default CardMovie
