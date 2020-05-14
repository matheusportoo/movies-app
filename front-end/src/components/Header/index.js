import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import * as S from './style'

import { route } from '../../routes/routes'
import { lockScroll } from '../../tools'
import ThemeControl from '../ThemeControl'
import Container from '../Container'
import SearchBar from '../SearchBar'

const Header = () => {
  const history = useHistory()
  const [isOpenForm, setIsOpenForm] = useState(false)

  const handleGoBack = () => history.go(-1)
  const isHome = () => window.location.pathname === route.home

  const GoBack = () => (
    <S.GoBackButton onClick={handleGoBack}
      type='button'
      aria-label='Back page'
    >
      <svg><use xlinkHref='#back' /></svg>
    </S.GoBackButton>
  )

  const SearchButton = () => (
    <S.SearchButton
      title='Search'
      type='button'
      aria-label='Search movies'
      onClick={() => toggleSearchBar()}
      isOpenForm={isOpenForm}
    >
      <svg><use xlinkHref={isOpenForm ? '#close-icon': '#search'} /></svg>
    </S.SearchButton>
  )

  const toggleSearchBar = () => {
    setIsOpenForm(!isOpenForm)
    lockScroll(!isOpenForm)
  }

  const handleSubmit = () => {
    setIsOpenForm(false)
    lockScroll(false)
  }

  return (
    <S.Header>
      <S.TopBar>
        <Container>
          <ThemeControl />
        </Container>
      </S.TopBar>
      <S.BottomBar>
        <Container>
          { isHome() ? null : <GoBack handleGoBack={handleGoBack} /> }
          <S.Logo>
            <Link to='/'>MovieFlix DB</Link>
          </S.Logo>
          <SearchButton />
          { isOpenForm ? <SearchBar afterHandleSubmit={handleSubmit} /> : null }
        </Container>
      </S.BottomBar>
    </S.Header>
  )
}

export default Header
