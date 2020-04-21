import React from 'react'

import Container from '../../../components/Container'
import StatusCode from '../../../components/StatusCode'

const Page404 = () => {
  return (
    <Container>
      <StatusCode
        code='404'
        title='Ops!'
        message='this page not found'
      />
    </Container>
  )
}

export default Page404
