import React from 'react'

import CardMovie from '../../components/CardMovie'
import * as S from './style'

function ListingCardsMoviesItem({ movie }) {
  const { poster_path, title, id, vote_average, release_date } = movie

  return (
    <CardMovie
      posterPath={poster_path}
      title={title}
      voteAverage={vote_average}
      releaseDate={release_date}
      href={`/movies/${id}`} />
  )
}

function ListingCardsMoviesSlider({ movies, slug }) {
  return (
    <S.ListingCardsMovieSlider>
      { movies.length && movies.map((movie, index) => (
        <S.ListingCardsMovieSliderItem key={`movies-by-category-${slug}-${index}`}>
          <ListingCardsMoviesItem movie={movie} />
        </S.ListingCardsMovieSliderItem>
      )) }
    </S.ListingCardsMovieSlider>
  )
}

function ListingCardsMoviesGrid({ movies }) {
  return (
    <S.ListingCardsMovieGrid>
      { movies.length && movies.map((movie, index) => (
        <ListingCardsMoviesItem movie={movie} key={`movies-${index}`} />
      )) }
    </S.ListingCardsMovieGrid>
  )
}

const ListingCardsMovies = ({ movies, modeView = 'grid', slug = ''}) => {
  return (
    modeView === 'slider' ?
      ListingCardsMoviesSlider({ movies, slug }) : ListingCardsMoviesGrid({ movies })
  )
}

export default ListingCardsMovies
