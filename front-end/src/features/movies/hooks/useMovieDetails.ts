import { useState, useEffect } from 'react'

import { ServiceMovies } from '@/features/movies/api/movies.service'
import type { Movie, MovieCredits } from '@/features/movies/api/types'

export const useMovieDetails = (movieId: string) => {
  const [details, setDetails] = useState<Partial<Movie>>({})
  const [credits, setCredits] = useState<Partial<MovieCredits>>({})
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([])
  const [isLoadingCredits, setIsLoadingCredits] = useState(true)
  const [isLoadingRelated, setIsLoadingRelated] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setDetails({})
    setCredits({})
    setRelatedMovies([])
    setIsLoadingCredits(true)
    setIsLoadingRelated(true)

    ServiceMovies.getDetails(movieId).then((response) => {
      setDetails(response.data)
    })

    ServiceMovies.getCredits(movieId).then((response) => {
      setCredits(response.data)
      setIsLoadingCredits(false)
    })

    ServiceMovies.getRelatedMovies(movieId).then((response) => {
      setRelatedMovies(response.data.results)
      setIsLoadingRelated(false)
    })
  }, [movieId])

  return {
    details,
    credits,
    relatedMovies,
    isLoadingCredits,
    isLoadingRelated,
  }
}
