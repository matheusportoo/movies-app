import React from 'react'

import CardMovie from '../../components/CardMovie'
import * as S from './style'

const ListingCardsMovies = ({ movies }) => {
  return (
    <S.ListingCardsMovie>
      { movies.map(({ poster_path, title, id, vote_average, release_date }, index) => (
        <CardMovie
          posterPath={poster_path}
          title={title}
          voteAverage={vote_average}
          releaseDate={release_date}
          href={`/movies/${id}`}
          key={`movies-${index}`} />
      )) }
    </S.ListingCardsMovie>
  )
}

export default ListingCardsMovies
