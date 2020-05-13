import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ListingCardsMovie from '../ListingCardsMovie'
import * as S from './style'

export const ListingMoviesByCategory = ({ title, movies, slug, seeMore, isFetching }) => {
  return (
    <S.ListingMoviesByCategory>
      <S.ListingMoviesByCategoryHead>
        <S.ListingMoviesByCategoryTitle>{title}</S.ListingMoviesByCategoryTitle>
        { seeMore ?
          <S.ListingMoviesByCategorySeeMore>
            <Link to={seeMore}>See more »</Link>
          </S.ListingMoviesByCategorySeeMore>
        : null }
      </S.ListingMoviesByCategoryHead>
      <S.ListingMoviesByCategoryMovies>
        <ListingCardsMovie movies={movies} modeView='slider' slug={slug} isFetching={isFetching} />
      </S.ListingMoviesByCategoryMovies>
    </S.ListingMoviesByCategory>
  )
}

ListingMoviesByCategory.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  slug: PropTypes.string,
  seeMore: PropTypes.string,
  isFetching: PropTypes.bool
}

export default ListingMoviesByCategory
