import { API, FETCH_MOVIE_BY } from './constants'
import { apiGet } from './client'
import type { Movie, MovieCredits, MovieListResponse, MovieVideosResponse } from './types'

const { v3 } = API

export class ServiceMovies {
  static getMovies({ fetchBy = FETCH_MOVIE_BY.latest, page = 1 }: { fetchBy?: string; page?: number }) {
    return apiGet<MovieListResponse>(`${v3.url}/movie/${fetchBy}`, {
      api_key: v3.apiKey,
      page,
    })
  }

  static getDetails(movieId: string) {
    return apiGet<Movie>(`${v3.url}/movie/${movieId}`, {
      api_key: v3.apiKey,
    })
  }

  static getImages(movieId: string) {
    return apiGet(`${v3.url}/movie/${movieId}/images`, {
      api_key: v3.apiKey,
    })
  }

  static getCredits(movieId: string) {
    return apiGet<MovieCredits>(`${v3.url}/movie/${movieId}/credits`, {
      api_key: v3.apiKey,
    })
  }

  static getRelatedMovies(movieId: string) {
    return apiGet<MovieListResponse>(`${v3.url}/movie/${movieId}/similar`, {
      api_key: v3.apiKey,
    })
  }

  static getVideos(movieId: string) {
    return apiGet<MovieVideosResponse>(`${v3.url}/movie/${movieId}/videos`, {
      api_key: v3.apiKey,
    })
  }

  static searchBy(query: string, page = 1) {
    return apiGet<MovieListResponse>(`${v3.url}/search/movie`, {
      query,
      api_key: v3.apiKey,
      page,
    })
  }
}
