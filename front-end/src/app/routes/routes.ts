import type { ComponentType } from 'react'

import { HomePage, MoviesListPage, MovieDetailsPage } from '@/features/movies'
import NotFoundPage from '@/pages/NotFound'

export const route = {
  home: '/',
  movies: '/movies',
  movie: '/movies/:movieId',
} as const

export interface AppRoute {
  path: string
  component: ComponentType
  label?: string
}

const routes: AppRoute[] = [
  {
    path: route.home,
    component: HomePage,
    label: 'Movies',
  },
  {
    path: route.movies,
    component: MoviesListPage,
    label: 'Movies',
  },
  {
    path: route.movie,
    component: MovieDetailsPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
]

export default routes
