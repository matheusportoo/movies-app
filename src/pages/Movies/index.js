import React, { useState, useEffect } from 'react'

import { ServiceMovies } from '../../services/movies'
import ListingCardsMovie from '../../components/ListingCardsMovie'

const PageMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!movies.length) {
      ServiceMovies.getPopular()
        .then(response => setMovies(response.data.results))
    }
  })

  return (
    <>
      <ListingCardsMovie movies={movies} />
    </>
  )
}

export default PageMovies
