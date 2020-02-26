import Pages from '../pages'

const { PageMovies, Page404, PageMoviesDetails } = Pages

const Routes = [{
    path: '/movies',
    component: PageMovies,
    label: 'Movies'
  },{
    path: '/movies/:movieId',
    component: PageMoviesDetails
  }, {
    path: '*',
    component: Page404
}]

export default Routes
