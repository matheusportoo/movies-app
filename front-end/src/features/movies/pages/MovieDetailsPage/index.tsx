import { useParams } from 'react-router-dom'

import Container from '@/shared/components/Container'
import MovieDetails from '@/features/movies/components/MovieDetails'
import MovieCredits from '@/features/movies/components/MovieCredits'
import ListingMoviesByCategory from '@/features/movies/components/ListingMoviesByCategory'
import { useMovieDetails } from '@/features/movies/hooks/useMovieDetails'
import * as S from './style'

const MovieDetailsPage = () => {
  const { movieId = '' } = useParams<{ movieId: string }>()
  const { details, credits, relatedMovies, isLoadingCredits, isLoadingRelated } =
    useMovieDetails(movieId)

  return (
    <Container>
      <S.PageMovieDetails>
        <MovieDetails
          title={details.title}
          overview={details.overview}
          releaseDate={details.release_date}
          backdropPath={details.backdrop_path}
          voteAverage={details.vote_average}
        />

        {!isLoadingCredits ? (
          <S.PageMovieDetailsWidget>
            <MovieCredits cast={credits.cast ?? []} />
          </S.PageMovieDetailsWidget>
        ) : null}

        <S.PageMovieDetailsWidget>
          <ListingMoviesByCategory
            title="Related Movies"
            movies={relatedMovies}
            slug="related-movies"
            isFetching={isLoadingRelated}
          />
        </S.PageMovieDetailsWidget>
      </S.PageMovieDetails>
    </Container>
  )
}

export default MovieDetailsPage
