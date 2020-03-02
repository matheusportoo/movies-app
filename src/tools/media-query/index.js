const BREAKPOINTS = {
  desktop: 1025,
  tablet: 768,
  mobile: 375,
}

const mediaQuery = {
  mobile(content) {
    return `@media screen and (min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px) {
      ${content}
    }`
  },
  tablet(content) {
    return `@media screen and (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px) {
      ${content}
    }`
  },
  desktop(content) {
    return `@media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      ${content}
    }`
  },
  mobileTablet(content) {
    return `@media screen and (min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.desktop - 1}px) {
      ${content}
    }`
  },
  tabletDesktop(content) {
    return `@media screen and (min-width: ${BREAKPOINTS.tablet}px) {
      ${content}
    }`
  },
}

export default mediaQuery
