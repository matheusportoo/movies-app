import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ServiceMovies } from '../../../services/movies'
import MovieDetails from '../../../components/MovieDetails'
import MovieCredits from '../../../components/MovieCredits'
import ListingMoviesByCategory from '../../../components/ListingMoviesByCategory'
import Container from '../../../components/Container'

import * as S from './style'

const PageMoviesDetails = () => {
  const { movieId } = useParams()
  const [details, setDetails] = useState({})
  const [detailsIsLoaded, setDetailsIsLoaded] = useState(false)
  const [credits, setCredits] = useState({})
  const [creditsIsLoaded, setCreditsIsLoaded] = useState(false)
  const [relatedMovies, setRelatedMovies] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })

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

    ServiceMovies.getRelatedMovies(movieId)
      .then(response => {
        setRelatedMovies(response.data.results)
      })
  }, [movieId])

  return (
    <Container>
      <S.PageMovieDetails>
        { detailsIsLoaded ?
          <MovieDetails
            title={details.title}
            overview={details.overview}
            releaseDate={details.release_date}
            backdropPath={details.backdrop_path}
            voteAverage={details.vote_average} />
        : null }

        { creditsIsLoaded ?
          <S.PageMovieDetailsWidget><MovieCredits cast={credits.cast} /></S.PageMovieDetailsWidget>
          : null
        }

        <S.PageMovieDetailsWidget>
          <ListingMoviesByCategory title={'Related Movies'} movies={relatedMovies} slug={'related-movies'} />
        </S.PageMovieDetailsWidget>
      </S.PageMovieDetails>
    </Container>
  )
}

export default PageMoviesDetails
