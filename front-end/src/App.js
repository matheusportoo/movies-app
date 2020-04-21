import React from 'react'

import * as S from './style/global'
import * as Routes from './routes'

import Symbols from './components/Symbols'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes.Pages />
      <Footer />
      <Symbols viewBox="0 0 24 24"/>
      <S.GlobalStyle />
    </>
  )
}

export default App
