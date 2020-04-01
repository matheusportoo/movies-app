import React from 'react'
import PropTypes from 'prop-types'

import ListingCardsMovie from '../ListingCardsMovie'
import * as S from './style'

export const ListingMoviesByCategory = ({ title, movies, slug }) => {
  return (
    <S.ListingMoviesByCategory>
      <S.ListingMoviesByCategoryTitle>{title}</S.ListingMoviesByCategoryTitle>
      <S.ListingMoviesByCategoryMovies>
        <ListingCardsMovie movies={movies} modeView='slider' slug={slug} />
      </S.ListingMoviesByCategoryMovies>
    </S.ListingMoviesByCategory>
  )
}

ListingMoviesByCategory.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  slug: PropTypes.oneOf(['popular','playing','top-rated','up-coming'])
}

export default ListingMoviesByCategory
