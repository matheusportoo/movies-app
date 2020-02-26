import React from 'react'

import * as S from './style/global'
import * as Routes from './routes'

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Routes.Links />
      <Routes.Pages />
    </>
  )
}

export default App
