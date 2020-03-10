import React, { useState, useEffect } from 'react'

import { ServiceMovies } from '../../services/movies'
import ListingCardsMovie from '../../components/ListingCardsMovie'
import Container from '../../components/Container'

const PageMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!movies.length) {
      ServiceMovies.getPopular()
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
