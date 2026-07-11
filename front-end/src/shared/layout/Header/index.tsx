import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import * as S from './style'
import { route } from '@/app/routes/routes'
import { lockScroll } from '@/shared/utils/lock-scroll'
import ThemeControl from '@/shared/components/ThemeControl'
import Container from '@/shared/components/Container'
import SearchBar from '@/features/movies/components/SearchBar'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpenForm, setIsOpenForm] = useState(false)

  const handleGoBack = () => navigate(-1)
  const isHome = () => location.pathname === route.home

  const GoBack = () => (
    <S.GoBackButton onClick={handleGoBack} type="button" aria-label="Back page">
      <svg>
        <use xlinkHref="#back" />
      </svg>
    </S.GoBackButton>
  )

  const SearchButton = () => (
    <S.SearchButton
      title="Search"
      type="button"
      aria-label="Search movies"
      onClick={() => toggleSearchBar()}
      $isOpenForm={isOpenForm}
    >
      <svg>
        <use xlinkHref={isOpenForm ? '#close-icon' : '#search'} />
      </svg>
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
          {isHome() ? null : <GoBack />}
          <S.Logo>
            <Link to="/">MovieFlix DB</Link>
          </S.Logo>
          <SearchButton />
          {isOpenForm ? <SearchBar afterHandleSubmit={handleSubmit} /> : null}
        </Container>
      </S.BottomBar>
    </S.Header>
  )
}

export default Header
