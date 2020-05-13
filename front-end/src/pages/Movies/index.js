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
  const [term] = useState(query.get('query') || '')
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    if (!movies.length) {
      if (term) {
        ServiceMovies.searchBy(term)
          .then(response => {
            setMovies(response.data.results)
            setIsFetching(false)
          })
        return;
      }

      ServiceMovies.getMovies({ fetchBy: FETCH_MOVIE_BY[query.get('modality') || 'popular'] })
        .then(response => {
          setMovies(response.data.results)
          setIsFetching(false)
        })
    }
  },[movies.length, query, term])

  return (
    <Container>
      <ListingCardsMovie movies={movies} isFetching={isFetching} />
    </Container>
  )
}

export default PageMovies
