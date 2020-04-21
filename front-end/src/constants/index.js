export const API = {
  v3: {
    url: 'https://api.themoviedb.org/3',
    apiKey: process.env.REACT_APP_API_KEY_V3
  },
  v4: {
    url: 'https://api.themoviedb.org/4',
    apiKey: process.env.REACT_APP_API_KEY_V4
  }
}

export const IMAGES = {
  url: 'https://image.tmdb.org/t/p/',
  presets: {
    poster: `w500`,
    backdrop: 'w1280',
    profile: 'w185'
  }
}

export const IMAGE_PATH = (type) => {
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
  coming: 'upcoming'
}
