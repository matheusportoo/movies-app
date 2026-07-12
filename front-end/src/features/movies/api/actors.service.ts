import { API } from './constants'
import { apiGet } from './client'
import type { Actor, ActorMovieCreditsResponse } from './types'

const { v3 } = API

export class ServiceActors {
  static getDetails(actorId: string) {
    return apiGet<Actor>(`${v3.url}/person/${actorId}`, {
      api_key: v3.apiKey,
    })
  }

  static getMovieCredits(actorId: string) {
    return apiGet<ActorMovieCreditsResponse>(`${v3.url}/person/${actorId}/movie_credits`, {
      api_key: v3.apiKey,
    })
  }
}
