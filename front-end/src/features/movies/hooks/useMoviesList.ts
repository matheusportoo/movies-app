import { useState, useEffect, useCallback, useRef } from 'react'

import { FETCH_MOVIE_BY } from '@/features/movies/api/constants'
import { ServiceMovies } from '@/features/movies/api/movies.service'
import type { FetchMovieBySlug, Movie } from '@/features/movies/api/types'

interface UseMoviesListParams {
  query: string
  modality: FetchMovieBySlug
}

export const useMoviesList = ({ query, modality }: UseMoviesListParams) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isFetching, setIsFetching] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const requestIdRef = useRef(0)

  useEffect(() => {
    const requestId = ++requestIdRef.current
    setIsFetching(true)
    setPage(1)

    const fetchMovies = query
      ? ServiceMovies.searchBy(query, 1)
      : ServiceMovies.getMovies({ fetchBy: FETCH_MOVIE_BY[modality], page: 1 })

    fetchMovies.then((response) => {
      if (requestId !== requestIdRef.current) return

      setMovies(response.results)
      setTotalPages(response.total_pages)
      setIsFetching(false)
    })
  }, [query, modality])

  const loadMore = useCallback(() => {
    if (isLoadingMore || page >= totalPages) return

    const nextPage = page + 1
    const requestId = requestIdRef.current
    setIsLoadingMore(true)

    const fetchMovies = query
      ? ServiceMovies.searchBy(query, nextPage)
      : ServiceMovies.getMovies({ fetchBy: FETCH_MOVIE_BY[modality], page: nextPage })

    fetchMovies.then((response) => {
      if (requestId !== requestIdRef.current) return

      setMovies((prev) => [...prev, ...response.results])
      setPage(response.page)
      setTotalPages(response.total_pages)
      setIsLoadingMore(false)
    })
  }, [query, modality, page, totalPages, isLoadingMore])

  const hasMore = page < totalPages

  return { movies, isFetching, isLoadingMore, hasMore, loadMore }
}
