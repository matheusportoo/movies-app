import axios from 'axios'
import { API } from '../constants'

const { v3 } = API

export class ServiceMovies {
  static getPopular() {
    return axios.get(`${v3.url}/movie/popular`, {
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
}

