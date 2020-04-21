import React from 'react'

import * as S from './style'

const html = document.querySelector('html')
const themeColors = ['dark', 'light']
const icons = {
  dark: 'night',
  light: 'sunny'
}

const changeThemeColor = (theme) => html.setAttribute('data-theme', theme)

const Button = ({ theme }) => (
  <S.Button
    type="button"
    onClick={ () => changeThemeColor(theme) }
  >
    <svg><use xlinkHref={`#${icons[theme]}`} /></svg>
  </S.Button>
)

const ThemeControl = () => (
  <div className="c-header__chage-theme-controls">
    { themeColors.map(theme => (
      <Button theme={theme} key={`theme-controls-${theme}`} />
    )) }
  </div>
)

export default ThemeControl