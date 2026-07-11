import { useState, useEffect } from 'react'

import { FETCH_MOVIE_BY } from '@/features/movies/api/constants'
import { ServiceMovies } from '@/features/movies/api/movies.service'
import type { FetchMovieBySlug, MovieCategory } from '@/features/movies/api/types'

const SLUGS: FetchMovieBySlug[] = ['popular', 'playing', 'rated', 'coming']

const createCategory = (title: string, slug: FetchMovieBySlug): MovieCategory => ({
  title,
  items: [],
  slug,
})

const INITIAL_CATEGORIES: MovieCategory[] = [
  createCategory('Playing', 'playing'),
  createCategory('Top Rated', 'rated'),
  createCategory('Up Coming', 'coming'),
  createCategory('Popular', 'popular'),
]

export const useHomeCategories = () => {
  const [categories, setCategories] = useState<MovieCategory[]>(INITIAL_CATEGORIES)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const promises = SLUGS.map((slug) =>
      ServiceMovies.getMovies({ fetchBy: FETCH_MOVIE_BY[slug] })
    )

    Promise.all(promises).then(([popular, playing, rated, coming]) => {
      setCategories([
        { ...createCategory('Playing', 'playing'), items: playing.data.results },
        { ...createCategory('Top Rated', 'rated'), items: rated.data.results },
        { ...createCategory('Up Coming', 'coming'), items: coming.data.results },
        { ...createCategory('Popular', 'popular'), items: popular.data.results },
      ])
      setIsFetching(false)
    })
  }, [])

  return { categories, isFetching }
}
