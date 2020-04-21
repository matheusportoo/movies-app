import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { FETCH_MOVIE_BY } from '../../constants'

import { ServiceMovies } from '../../services/movies'
import ListingCardsMovie from '../../components/ListingCardsMovie'
import Container from '../../components/Container'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PageMovies = () => {
  const query = useQuery()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!movies.length) {
      ServiceMovies.getMovies({ fetchBy: FETCH_MOVIE_BY[query.get('modality') || 'popular'] })
        .then(response => setMovies(response.data.results))
    }
  })

  return (
    <Container>
      <ListingCardsMovie movies={movies} />
    </Container>
  )
}

export default PageMovies
