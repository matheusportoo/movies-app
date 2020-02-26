import React from 'react'
import { Link } from 'react-router-dom'

import { getDateFormated } from '../../tools'
import { IMAGES } from '../../constants'

const MovieDetails = ({
  title,
  overview,
  releaseDate,
  backdropPath,
  voteAverage
}) => {
  return (
    <>
      <Link to='/movies' children='Voltar' />
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>{getDateFormated(releaseDate)}</p>
      <img
        src={`${IMAGES.url}${IMAGES.presets.backdrop}${backdropPath}`}
        alt={title}
      />
      <p>{voteAverage}</p>
    </>
  )
}

export default MovieDetails
