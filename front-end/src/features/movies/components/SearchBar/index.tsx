import { useState, FormEvent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { route } from '@/app/routes/routes'
import * as S from './style'

interface SearchBarProps {
  afterHandleSubmit: () => void
}

const SearchBar = ({ afterHandleSubmit }: SearchBarProps) => {
  const [term, updateTerm] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const isSearchPage = () => {
    const [pathname] = location.pathname.split('?')
    return pathname === route.movies
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (term) {
      navigate(`/movies?query=${term}`, { replace: isSearchPage() })
      afterHandleSubmit()
    }
  }

  return (
    <S.SearchBar>
      <S.SearchBarForm onSubmit={handleFormSubmit}>
        <S.SearchBarInput
          type="text"
          onChange={(event) => updateTerm(event.target.value)}
          name="query"
          value={term}
        />
        <S.SearchBarButton type="submit" aria-label="Submit search movies">
          <svg>
            <use xlinkHref="#search" />
          </svg>
        </S.SearchBarButton>
      </S.SearchBarForm>
    </S.SearchBar>
  )
}

export default SearchBar
