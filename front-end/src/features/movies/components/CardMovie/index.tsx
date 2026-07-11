import { NavLink } from 'react-router-dom'

import { IMAGE_PATH } from '@/features/movies/api/constants'
import { formatDate } from '@/shared/utils/format-date'
import AverageGrade from '../AverageGrade'
import * as S from './style'

interface CardMovieProps {
  posterPath?: string | null
  title?: string
  href: string
  releaseDate?: string
  voteAverage?: number
  isFetching?: boolean
}

const CardMovie = ({
  posterPath,
  title,
  href,
  releaseDate,
  voteAverage,
  isFetching,
}: CardMovieProps) => {
  return (
    <S.CardMovie $isFetching={isFetching}>
      <NavLink to={href}>
        <S.CardMovieImage>
          {posterPath && (
            <img src={`${IMAGE_PATH('poster')}${posterPath}`} alt={title} loading="lazy" />
          )}
        </S.CardMovieImage>

        <S.CardMovieInfo $isFetching={isFetching}>
          <p>
            <span>release date:</span>
            <br />
            <span>{formatDate(releaseDate)}</span>
          </p>
          <AverageGrade value={voteAverage} />
        </S.CardMovieInfo>
      </NavLink>
    </S.CardMovie>
  )
}

export default CardMovie
