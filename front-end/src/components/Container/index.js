import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style'

const Container = ({ children }) => {
  return(<S.Container>{children}</S.Container>)
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
