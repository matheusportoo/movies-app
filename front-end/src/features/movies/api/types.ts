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
  name: string
  character: string
  profile_path: string | null
}

export interface MovieCredits {
  cast: CastMember[]
}

export type FetchMovieBySlug = 'latest' | 'playing' | 'popular' | 'rated' | 'coming'

export interface MovieCategory {
  title: string
  items: Movie[]
  slug: FetchMovieBySlug
}
