import CardMovie from '@/features/movies/components/CardMovie'
import type { Movie } from '@/features/movies/api/types'
import * as S from './style'

interface ListingCardsMoviesItemProps {
  movie: Movie
  isFetching: boolean
}

function ListingCardsMoviesItem({ movie, isFetching }: ListingCardsMoviesItemProps) {
  const { poster_path, title, id, vote_average, release_date } = movie

  return (
    <CardMovie
      posterPath={poster_path}
      title={title}
      voteAverage={vote_average}
      releaseDate={release_date}
      href={`/movies/${id}`}
      isFetching={isFetching}
    />
  )
}

interface ListingCardsMoviesSliderProps {
  movies: Movie[]
  slug: string
  isFetching: boolean
}

function ListingCardsMoviesSlider({ movies, slug, isFetching }: ListingCardsMoviesSliderProps) {
  return (
    <S.ListingCardsMovieSlider>
      {movies.map((movie, index) => (
        <S.ListingCardsMovieSliderItem key={`movies-by-category-${slug}-${index}`}>
          <ListingCardsMoviesItem movie={movie} isFetching={isFetching} />
        </S.ListingCardsMovieSliderItem>
      ))}
    </S.ListingCardsMovieSlider>
  )
}

interface ListingCardsMoviesGridProps {
  movies: Movie[]
  isFetching: boolean
}

function ListingCardsMoviesGrid({ movies, isFetching }: ListingCardsMoviesGridProps) {
  return (
    <S.ListingCardsMovieGrid>
      {movies.map((movie, index) => (
        <ListingCardsMoviesItem movie={movie} isFetching={isFetching} key={`movies-${index}`} />
      ))}
    </S.ListingCardsMovieGrid>
  )
}

interface ListingCardsMoviesProps {
  movies: Movie[]
  modeView?: 'grid' | 'slider'
  slug?: string
  isFetching?: boolean
}

const fakeMovie: Movie = {
  id: 0,
  title: '',
  overview: '',
  poster_path: '',
  backdrop_path: '',
  release_date: '',
  vote_average: 0,
}

const fakeMovies = Array.from({ length: 20 }, () => fakeMovie)

const ListingCardsMovies = ({
  movies,
  modeView = 'grid',
  slug = '',
  isFetching = false,
}: ListingCardsMoviesProps) => {
  const displayMovies = isFetching ? fakeMovies : movies

  return modeView === 'slider' ? (
    <ListingCardsMoviesSlider movies={displayMovies} slug={slug} isFetching={isFetching} />
  ) : (
    <ListingCardsMoviesGrid movies={displayMovies} isFetching={isFetching} />
  )
}

export default ListingCardsMovies
