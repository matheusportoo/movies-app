import { useLocation } from 'react-router-dom'

import Container from '@/shared/components/Container'
import ListingCardsMovie from '@/features/movies/components/ListingCardsMovie'
import { useMoviesList } from '@/features/movies/hooks/useMoviesList'
import type { FetchMovieBySlug } from '@/features/movies/api/types'
import * as S from './style'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const MoviesListPage = () => {
  const query = useQuery()
  const term = query.get('query') || ''
  const modality = (query.get('modality') || 'popular') as FetchMovieBySlug
  const { movies, isFetching, isLoadingMore, hasMore, loadMore } = useMoviesList({
    query: term,
    modality,
  })

  return (
    <Container>
      <ListingCardsMovie movies={movies} isFetching={isFetching} />
      {hasMore && !isFetching && (
        <S.LoadMoreWrapper>
          <S.LoadMoreButton onClick={loadMore} disabled={isLoadingMore}>
            {isLoadingMore ? 'Carregando...' : 'Carregar mais'}
          </S.LoadMoreButton>
        </S.LoadMoreWrapper>
      )}
    </Container>
  )
}

export default MoviesListPage
