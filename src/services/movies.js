import axios from 'axios'
import { API, FETCH_MOVIE_BY } from '../constants'

const { v3 } = API

export class ServiceMovies {
  static getMovies({ fetchBy = FETCH_MOVIE_BY.latest }) {
    return axios.get(`${v3.url}/movie/${fetchBy}`, {
      params: { api_key: v3.apiKey }
    })
  }

  static getDetails(movieId) {
    return axios.get(`${v3.url}/movie/${movieId}`, {
      params: { api_key: v3.apiKey }
    })
  }

  static getImages(movieId) {
    return axios.get(`${v3.url}/movie/${movieId}/images`, {
      params: { api_key: v3.apiKey }
    })
  }

  static getCredits(movieId) {
    return axios.get(`${v3.url}/movie/${movieId}/credits`, {
      params: { api_key: v3.apiKey }
    })
  }

  static getRelatedMovies(movieId) {
    return axios.get(`${v3.url}/movie/${movieId}/similar`, {
      params: { api_key: v3.apiKey }
    })
  }
}

