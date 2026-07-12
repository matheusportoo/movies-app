import { useState, useEffect } from 'react'

import { ServiceActors } from '@/features/movies/api/actors.service'
import type { Actor, Movie } from '@/features/movies/api/types'

const toMovie = (credit: {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
}): Movie => ({
  id: credit.id,
  title: credit.title,
  overview: credit.overview,
  poster_path: credit.poster_path,
  backdrop_path: credit.backdrop_path,
  release_date: credit.release_date,
  vote_average: credit.vote_average,
})

export const useActorDetails = (actorId: string) => {
  const [details, setDetails] = useState<Partial<Actor>>({})
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoadingDetails, setIsLoadingDetails] = useState(true)
  const [isLoadingMovies, setIsLoadingMovies] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setDetails({})
    setMovies([])
    setIsLoadingDetails(true)
    setIsLoadingMovies(true)

    ServiceActors.getDetails(actorId).then((response) => {
      setDetails(response)
      setIsLoadingDetails(false)
    })

    ServiceActors.getMovieCredits(actorId).then((response) => {
      const sortedMovies = response.cast
        .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
        .map(toMovie)

      setMovies(sortedMovies)
      setIsLoadingMovies(false)
    })
  }, [actorId])

  return {
    details,
    movies,
    isLoadingDetails,
    isLoadingMovies,
  }
}
