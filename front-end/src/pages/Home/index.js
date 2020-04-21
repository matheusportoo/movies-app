import React, { useState, useEffect } from 'react'

import { FETCH_MOVIE_BY } from '../../constants'
import { ServiceMovies } from '../../services/movies'
import Container from '../../components/Container'
import ListingMoviesByCategory from '../../components/ListingMoviesByCategory'
import * as S from './style'

const PageHome = () => {
  const slugs = ['popular', 'playing', 'rated', 'coming']
  const [moviesPopular, setMoviesPopular] = useState({ title: 'Popular', items: [], slug: 'popular' })
  const [moviesPlaying, setMoviesPlaying] = useState({ title: 'Playing', items: [], slug: 'playing' })
  const [moviesTopRated, setMoviesTopRated] = useState({ title: 'Top Rated', items: [], slug: 'top-rated' })
  const [moviesUpComing, setMoviesUpComing] = useState({ title: 'Up Coming', items: [], slug: 'up-coming' })

  useEffect(() => {
    if (
      !moviesPopular.items.length &&
      !moviesPlaying.items.length &&
      !moviesTopRated.items.length &&
      !moviesUpComing.items.length
    ) {
      const promises = slugs.map(slug =>
        ServiceMovies
          .getMovies({ fetchBy: FETCH_MOVIE_BY[slug] })
          .then(response => response)
      )

      Promise.all(promises)
        .then(responses => {
          const [popular, playing, rated, coming] = responses

          setMoviesPopular({ ...moviesPopular, ...{ items: popular.data.results } })
          setMoviesPlaying({ ...moviesPlaying, ...{ items: playing.data.results } })
          setMoviesTopRated({ ...moviesTopRated, ...{ items: rated.data.results } })
          setMoviesUpComing({ ...moviesUpComing, ...{ items: coming.data.results } })
        })
    }
  })

  return (
    <Container>
      { [moviesPlaying, moviesTopRated, moviesUpComing, moviesPopular]
          .map(({ title, items, slug }, index) => (

            <S.PageHomeListingCategories key={`movies-by-category-${index}`}>
              <ListingMoviesByCategory title={title} movies={items} slug={slug} />
            </S.PageHomeListingCategories>

          )) }
    </Container>
  )
}

export default PageHome
