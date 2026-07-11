import * as S from './style'
import { formatDate } from '@/shared/utils/format-date'
import { IMAGE_PATH } from '@/features/movies/api/constants'
import AverageGrade from '../AverageGrade'

interface MovieDetailsProps {
  title?: string
  overview?: string
  releaseDate?: string
  backdropPath?: string | null
  voteAverage?: number
}

const MovieDetails = ({ title, overview, releaseDate, backdropPath, voteAverage }: MovieDetailsProps) => {
  return (
    <>
      <S.MovieDetailsHighlight>
        <S.MovieDetailsHighlightWrapper>
          {backdropPath && (
            <img src={`${IMAGE_PATH('backdrop')}${backdropPath}`} alt={title} />
          )}
        </S.MovieDetailsHighlightWrapper>
      </S.MovieDetailsHighlight>

      <S.MovieDetailsInfo>
        <S.MovieDetailsTitle>{title}</S.MovieDetailsTitle>
        <S.MovieDetailsRelease>
          <p>
            <span>release date:</span>
            <br />
            <span>{formatDate(releaseDate)}</span>
          </p>
          <AverageGrade value={voteAverage} />
        </S.MovieDetailsRelease>
        <S.MovieDetailsText>{overview}</S.MovieDetailsText>
      </S.MovieDetailsInfo>
    </>
  )
}

export default MovieDetails
