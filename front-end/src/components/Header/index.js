import React from 'react'

import * as S from './style'

import ThemeControl from '../ThemeControl'
import Container from '../Container'
import { Link } from 'react-router-dom'

const Header = () => (
  <S.Header>
    <S.TopBar>
      <Container>
        <ThemeControl />
      </Container>
    </S.TopBar>
    <S.BottomBar>
      <Container>
        <S.Logo>
          <Link to='/'>MovieFlix DB</Link>
        </S.Logo>
      </Container>
    </S.BottomBar>
  </S.Header>
)

export default Header
