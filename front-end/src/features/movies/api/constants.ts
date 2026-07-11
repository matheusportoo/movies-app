export const API = {
  v3: {
    url: 'https://api.themoviedb.org/3',
    apiKey: import.meta.env.VITE_API_KEY_V3,
  },
  v4: {
    url: 'https://api.themoviedb.org/4',
    apiKey: import.meta.env.VITE_API_KEY_V4,
  },
}

export const IMAGES = {
  url: 'https://image.tmdb.org/t/p/',
  presets: {
    poster: 'w200',
    poster2x: 'w400',
    backdrop: 'w1280',
    profile: 'w185',
  },
} as const

export type ImagePreset = keyof typeof IMAGES.presets

export const IMAGE_PATH = (type: ImagePreset): string => {
  if (IMAGES.presets[type]) {
    return `${IMAGES.url}${IMAGES.presets[type]}`
  }

  throw Error(`Pass only this arguments: ${Object.keys(IMAGES.presets).join(', ')}`)
}

export const FETCH_MOVIE_BY = {
  latest: 'latest',
  playing: 'now_playing',
  popular: 'popular',
  rated: 'top_rated',
  coming: 'upcoming',
} as const
