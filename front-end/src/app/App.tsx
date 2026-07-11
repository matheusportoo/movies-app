import Symbols from '@/shared/components/Symbols'
import Header from '@/shared/layout/Header'
import Footer from '@/shared/layout/Footer'
import { GlobalStyle } from '@/app/styles/global'
import { Pages } from '@/app/routes'

const App = () => {
  return (
    <>
      <Header />
      <Pages />
      <Footer />
      <Symbols viewBox="0 0 24 24" />
      <GlobalStyle />
    </>
  )
}

export default App
