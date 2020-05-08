import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { route } from '../../routes/routes'
import * as S from './style'

const SearchBar = ({ afterHandleSubmit }) => {
  const [term, updateTerm] = useState('')
  const history = useHistory()

  const handleFormSubmit = () => {
    if (term) {
      history[isSearchPage() ? 'location' : 'push'](`/movies?query=${term}`)
      afterHandleSubmit()
    }
  }

  const isSearchPage = () => {
    const [pathname] = window.location.pathname.split('?')
    return pathname === route.movies
  }

  return (
    <S.SearchBar>
      <S.SearchBarForm onSubmit={handleFormSubmit}>
        <S.SearchBarInput
          type='text'
          onChange={(event) => updateTerm(event.target.value)}
          name='query'
          value={term}
        />
        <S.SearchBarButton>
          <svg><use xlinkHref='#search' /></svg>
        </S.SearchBarButton>
      </S.SearchBarForm>
    </S.SearchBar>
  )
}

export default SearchBar
