import React from 'react'

import * as S from './style'

import ThemeControl from '../ThemeControl'
import Container from '../Container'
import { Link, useHistory } from 'react-router-dom'

const isHome = () => window.location.pathname === '/'

const GoBack = ({ history }) => (
  <S.GoBack>
    <Link onClick={history.goBack}>
      <svg><use xlinkHref={`#back`} /></svg>
    </Link>
  </S.GoBack>
)

const Header = () => {
  const history = useHistory()

  return (
    <S.Header>
      <S.TopBar>
        <Container>
          <ThemeControl />
        </Container>
      </S.TopBar>
      <S.BottomBar>
        <Container>
          { isHome() ? null : <GoBack history={history} /> }
          <S.Logo>
            <Link to='/'>MovieFlix DB</Link>
          </S.Logo>
        </Container>
      </S.BottomBar>
    </S.Header>
  )
}

export default Header
