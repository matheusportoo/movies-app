import { useState, useEffect } from 'react'

import { FETCH_MOVIE_BY } from '@/features/movies/api/constants'
import { ServiceMovies } from '@/features/movies/api/movies.service'
import type { FetchMovieBySlug, Movie } from '@/features/movies/api/types'

interface UseMoviesListParams {
  query: string
  modality: FetchMovieBySlug
}

export const useMoviesList = ({ query, modality }: UseMoviesListParams) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    setIsFetching(true)

    const fetchMovies = query
      ? ServiceMovies.searchBy(query)
      : ServiceMovies.getMovies({ fetchBy: FETCH_MOVIE_BY[modality] })

    fetchMovies.then((response) => {
      setMovies(response.data.results)
      setIsFetching(false)
    })
  }, [query, modality])

  return { movies, isFetching }
}
