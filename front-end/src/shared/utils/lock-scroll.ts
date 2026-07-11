export const lockScroll = (isLock: boolean): string =>
  (document.body.style.overflow = isLock ? 'hidden' : 'auto')
