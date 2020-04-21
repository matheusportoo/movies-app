import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'

const StatusCode = ({ code, title, message }) => (
  <S.StatusCode>
    <S.StatusCodeWrapper>
      <S.Title>
        {title}
      </S.Title>
      <S.Message>
        {message} - Status: {code}
      </S.Message>
      <S.Button>
        <Link to='/' children='« back to home' />
      </S.Button>
    </S.StatusCodeWrapper>
  </S.StatusCode>
)

export default StatusCode
