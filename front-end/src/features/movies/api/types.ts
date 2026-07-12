export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
}

export interface MovieListResponse {
  page: number
  total_pages: number
  total_results: number
  results: Movie[]
}

export interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export interface Actor {
  id: number
  name: string
  biography: string
  birthday: string | null
  place_of_birth: string | null
  profile_path: string | null
}

export interface ActorMovieCredit {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  character: string
}

export interface ActorMovieCreditsResponse {
  cast: ActorMovieCredit[]
}

export interface MovieCredits {
  cast: CastMember[]
}

export interface MovieVideo {
  key: string
  site: string
  type: string
  name: string
}

export interface MovieVideosResponse {
  results: MovieVideo[]
}

export type FetchMovieBySlug = 'latest' | 'playing' | 'popular' | 'rated' | 'coming'

export interface MovieCategory {
  title: string
  items: Movie[]
  slug: FetchMovieBySlug
}
