import Pages from '../pages'

const {
  PageHome,
  PageMovies,
  Page404,
  PageMoviesDetails
} = Pages

export const route = {
  home: '/',
  movies: '/movies',
  movie: '/movies/:movieId'
}

const Routes = [{
    path: route.home,
    component: PageHome,
    label: 'Movies'
  }, {
    path: route.movies,
    component: PageMovies,
    label: 'Movies'
  }, {
    path: route.movie,
    component: PageMoviesDetails
  }, {
    path: '*',
    component: Page404
}]

export default Routes
