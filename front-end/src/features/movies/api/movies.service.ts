import axios from 'axios'

import { API, FETCH_MOVIE_BY } from './constants'
import type { Movie, MovieCredits, MovieListResponse } from './types'

const { v3 } = API

export class ServiceMovies {
  static getMovies({ fetchBy = FETCH_MOVIE_BY.latest, page = 1 }: { fetchBy?: string; page?: number }) {
    return axios.get<MovieListResponse>(`${v3.url}/movie/${fetchBy}`, {
      params: { api_key: v3.apiKey, page },
    })
  }

  static getDetails(movieId: string) {
    return axios.get<Movie>(`${v3.url}/movie/${movieId}`, {
      params: { api_key: v3.apiKey },
    })
  }

  static getImages(movieId: string) {
    return axios.get(`${v3.url}/movie/${movieId}/images`, {
      params: { api_key: v3.apiKey },
    })
  }

  static getCredits(movieId: string) {
    return axios.get<MovieCredits>(`${v3.url}/movie/${movieId}/credits`, {
      params: { api_key: v3.apiKey },
    })
  }

  static getRelatedMovies(movieId: string) {
    return axios.get<MovieListResponse>(`${v3.url}/movie/${movieId}/similar`, {
      params: { api_key: v3.apiKey },
    })
  }

  static searchBy(query: string, page = 1) {
    return axios.get<MovieListResponse>(`${v3.url}/search/movie`, {
      params: { query, api_key: v3.apiKey, page },
    })
  }
}
