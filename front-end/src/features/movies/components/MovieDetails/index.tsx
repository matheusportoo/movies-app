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
  videoKey?: string | null
}

const MovieDetails = ({
  title,
  overview,
  releaseDate,
  backdropPath,
  voteAverage,
  videoKey,
}: MovieDetailsProps) => {
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
        {videoKey && (
          <S.MovieDetailsVideo>
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}`}
              title={`${title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.MovieDetailsVideo>
        )}
      </S.MovieDetailsInfo>
    </>
  )
}

export default MovieDetails
