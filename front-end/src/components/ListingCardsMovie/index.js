import React from 'react'
import PropTypes from 'prop-types'

import CardMovie from '../../components/CardMovie'
import * as S from './style'

function ListingCardsMoviesItem({ movie, isFetching }) {
  const { poster_path, title, id, vote_average, release_date } = movie

  return (
    <CardMovie
      posterPath={poster_path}
      title={title}
      voteAverage={vote_average}
      releaseDate={release_date}
      href={`/movies/${id}`}
      isFetching={isFetching}
    />
  )
}

function ListingCardsMoviesSlider({ movies, slug, isFetching }) {
  return (
    <S.ListingCardsMovieSlider>
      { movies.map((movie, index) => (
        <S.ListingCardsMovieSliderItem key={`movies-by-category-${slug}-${index}`}>
          <ListingCardsMoviesItem movie={movie} isFetching={isFetching} />
        </S.ListingCardsMovieSliderItem>
      )) }
    </S.ListingCardsMovieSlider>
  )
}

function ListingCardsMoviesGrid({ movies, isFetching }) {
  return (
    <S.ListingCardsMovieGrid>
      { movies.map((movie, index) => (
        <ListingCardsMoviesItem movie={movie} isFetching={isFetching} key={`movies-${index}`} />
      )) }
    </S.ListingCardsMovieGrid>
  )
}

const ListingCardsMovies = ({ movies, modeView = 'grid', slug = '', isFetching = false}) => {
  const fakeMovie = {
    value: 0,
    posterPath: '',
    title: '',
    href: '',
    releaseDate: '',
    voteAverage: 0
  }

  const fakeMovies = Array.from(Array(20)).map(_ => fakeMovie)

  return (
    modeView === 'slider'
      ? ListingCardsMoviesSlider({ movies: isFetching ? fakeMovies : movies, slug, isFetching })
      : ListingCardsMoviesGrid({ movies: isFetching ? fakeMovies : movies, isFetching })
  )
}

ListingCardsMoviesItem.propTypes = {
  movies: PropTypes.array
}

ListingCardsMoviesGrid.propTypes = {
  movies: PropTypes.array
}

ListingCardsMoviesSlider.propTypes = {
  movies: PropTypes.array,
  slug: PropTypes.string
}

ListingCardsMovies.propTypes = {
  movies: PropTypes.array,
  modeView: PropTypes.oneOf(['grid', 'slider']),
  slug: PropTypes.string,
  isFetching: PropTypes.bool
}

export default ListingCardsMovies
