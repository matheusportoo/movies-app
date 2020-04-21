import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ListingCardsMovie from '../ListingCardsMovie'
import * as S from './style'

export const ListingMoviesByCategory = ({ title, movies, slug, seeMore }) => {
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
        <ListingCardsMovie movies={movies} modeView='slider' slug={slug} />
      </S.ListingMoviesByCategoryMovies>
    </S.ListingMoviesByCategory>
  )
}

ListingMoviesByCategory.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  slug: PropTypes.string,
  seeMore: PropTypes.string
}

export default ListingMoviesByCategory
