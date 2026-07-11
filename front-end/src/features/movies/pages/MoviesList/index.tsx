import { useLocation } from 'react-router-dom'

import Container from '@/shared/components/Container'
import ListingCardsMovie from '@/features/movies/components/ListingCardsMovie'
import { useMoviesList } from '@/features/movies/hooks/useMoviesList'
import type { FetchMovieBySlug } from '@/features/movies/api/types'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const MoviesListPage = () => {
  const query = useQuery()
  const term = query.get('query') || ''
  const modality = (query.get('modality') || 'popular') as FetchMovieBySlug
  const { movies, isFetching } = useMoviesList({ query: term, modality })

  return (
    <Container>
      <ListingCardsMovie movies={movies} isFetching={isFetching} />
    </Container>
  )
}

export default MoviesListPage
