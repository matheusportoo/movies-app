import * as S from './style'
import type { ThemeMode } from '@/shared/types/theme'

const html = document.querySelector('html')!
const themeSelected = sessionStorage.getItem('theme') as ThemeMode | null
const themeColors: ThemeMode[] = ['dark', 'light']
const icons: Record<ThemeMode, string> = {
  dark: 'night',
  light: 'sunny',
}

const changeThemeColor = (theme: ThemeMode) => {
  html.setAttribute('data-theme', theme)
  sessionStorage.setItem('theme', theme)
}

interface ButtonProps {
  theme: ThemeMode
}

const Button = ({ theme }: ButtonProps) => (
  <S.Button type="button" aria-label={`change theme mode for ${theme}`} onClick={() => changeThemeColor(theme)}>
    <svg>
      <use xlinkHref={`#${icons[theme]}`} />
    </svg>
  </S.Button>
)

const ThemeControl = () => {
  if (themeSelected) {
    changeThemeColor(themeSelected)
  }

  return (
    <div className="c-header__chage-theme-controls">
      {themeColors.map((theme) => (
        <Button theme={theme} key={`theme-controls-${theme}`} />
      ))}
    </div>
  )
}

export default ThemeControl
