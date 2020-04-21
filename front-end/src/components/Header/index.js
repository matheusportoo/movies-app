import React from 'react'

import * as S from './style'

import ThemeControl from '../ThemeControl'
import Container from '../Container'
import { Link, useHistory } from 'react-router-dom'

const isHome = () => window.location.pathname === '/'

const GoBack = ({ handleGoBack }) => (
  <S.GoBack onClick={handleGoBack} type='button' role='button'>
    <svg><use xlinkHref={`#back`} /></svg>
  </S.GoBack>
)

const Header = () => {
  const history = useHistory()
  const handleGoBack = () => history.go(-1)

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
        </Container>
      </S.BottomBar>
    </S.Header>
  )
}

export default Header
