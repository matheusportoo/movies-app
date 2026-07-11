import { Link } from 'react-router-dom'

import * as S from './style'

interface StatusCodeProps {
  code: string
  title: string
  message: string
}

const StatusCode = ({ code, title, message }: StatusCodeProps) => (
  <S.StatusCode>
    <S.StatusCodeWrapper>
      <S.Title>{title}</S.Title>
      <S.Message>
        {message} - Status: {code}
      </S.Message>
      <S.Button>
        <Link to="/">« back to home</Link>
      </S.Button>
    </S.StatusCodeWrapper>
  </S.StatusCode>
)

export default StatusCode
