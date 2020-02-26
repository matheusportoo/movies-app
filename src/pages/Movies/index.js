import React, { useState, useEffect } from 'react'

import { ServiceMovies } from '../../services/movies'
import CardMovie from '../../components/CardMovie'

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
      { movies.map(({ poster_path, title, id }, index) => (
        <CardMovie
          posterPath={poster_path}
          title={title}
          href={`/movies/${id}`}
          key={`movies-${index}`} />
      )) }
    </>
  )
}

export default PageMovies
