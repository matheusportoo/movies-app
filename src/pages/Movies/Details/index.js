import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ServiceMovies } from '../../../services/movies'
import MovieDetails from '../../../components/MovieDetails'
import MovieCredits from '../../../components/MovieCredits'

const PageMoviesDetails = () => {
  const { movieId } = useParams()
  const [details, setDetails] = useState({})
  const [detailsIsLoaded, setDetailsIsLoaded] = useState(false)
  const [credits, setCredits] = useState({})
  const [creditsIsLoaded, setCreditsIsLoaded] = useState(false)

  useEffect(() => {
    if (!detailsIsLoaded && !creditsIsLoaded) {
      ServiceMovies.getDetails(movieId)
        .then(response => {
          setDetails(response.data)
          setDetailsIsLoaded(true)
        })

      ServiceMovies.getCredits(movieId)
        .then(response => {
          setCredits(response.data)
          setCreditsIsLoaded(true)
        })
    }
  }, [creditsIsLoaded, detailsIsLoaded, movieId])

  return (
    <>
      { detailsIsLoaded ?
        <MovieDetails
          title={details.title}
          overview={details.overview}
          releaseDate={details.release_date}
          backdropPath={details.backdrop_path}
          voteAverage={details.vote_average} />
      : null }

      { creditsIsLoaded ? <MovieCredits cast={credits.cast} /> : null}
    </>
  )
}

export default PageMoviesDetails
