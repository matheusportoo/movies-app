import { Link } from 'react-router-dom'

import ListingCardsMovie from '../ListingCardsMovie'
import type { Movie } from '@/features/movies/api/types'
import * as S from './style'

interface ListingMoviesByCategoryProps {
  title: string
  movies: Movie[]
  slug: string
  seeMore?: string
  isFetching: boolean
}

export const ListingMoviesByCategory = ({
  title,
  movies,
  slug,
  seeMore,
  isFetching,
}: ListingMoviesByCategoryProps) => {
  return (
    <S.ListingMoviesByCategory>
      <S.ListingMoviesByCategoryHead>
        <S.ListingMoviesByCategoryTitle>{title}</S.ListingMoviesByCategoryTitle>
        {seeMore ? (
          <S.ListingMoviesByCategorySeeMore>
            <Link to={seeMore}>See more »</Link>
          </S.ListingMoviesByCategorySeeMore>
        ) : null}
      </S.ListingMoviesByCategoryHead>
      <S.ListingMoviesByCategoryMovies>
        <ListingCardsMovie movies={movies} modeView="slider" slug={slug} isFetching={isFetching} />
      </S.ListingMoviesByCategoryMovies>
    </S.ListingMoviesByCategory>
  )
}

export default ListingMoviesByCategory
