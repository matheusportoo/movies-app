import styled from 'styled-components'

import { mediaQuery } from '../../tools'

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  ${mediaQuery.desktop(`
    max-width: 1170px;
    margin: 0 auto;
  `)}
`

