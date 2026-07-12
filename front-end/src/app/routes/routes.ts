import type { ComponentType } from 'react'

import { HomePage, MoviesListPage, MovieDetailsPage, ActorDetailsPage } from '@/features/movies'
import NotFoundPage from '@/pages/NotFound'

export const route = {
  home: '/',
  movies: '/movies',
  movie: '/movies/:movieId',
  actor: '/actors/:actorId',
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
    path: route.actor,
    component: ActorDetailsPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
]

export default routes
