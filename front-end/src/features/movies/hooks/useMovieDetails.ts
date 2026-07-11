import { useState, useEffect } from 'react'

import { ServiceMovies } from '@/features/movies/api/movies.service'
import type { Movie, MovieCredits } from '@/features/movies/api/types'
import { selectTrailer } from '@/features/movies/utils/select-trailer'

export const useMovieDetails = (movieId: string) => {
  const [details, setDetails] = useState<Partial<Movie>>({})
  const [credits, setCredits] = useState<Partial<MovieCredits>>({})
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([])
  const [videoKey, setVideoKey] = useState<string | null>(null)
  const [isLoadingCredits, setIsLoadingCredits] = useState(true)
  const [isLoadingRelated, setIsLoadingRelated] = useState(true)
  const [isLoadingVideos, setIsLoadingVideos] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setDetails({})
    setCredits({})
    setRelatedMovies([])
    setVideoKey(null)
    setIsLoadingCredits(true)
    setIsLoadingRelated(true)
    setIsLoadingVideos(true)

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

    ServiceMovies.getVideos(movieId).then((response) => {
      setVideoKey(selectTrailer(response.data.results))
      setIsLoadingVideos(false)
    })
  }, [movieId])

  return {
    details,
    credits,
    relatedMovies,
    videoKey,
    isLoadingCredits,
    isLoadingRelated,
    isLoadingVideos,
  }
}
