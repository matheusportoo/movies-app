import React from 'react'
import { Link } from 'react-router-dom'

import { getDateFormated } from '../../tools'
import { IMAGE_PATH } from '../../constants'

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
        src={`${IMAGE_PATH('backdrop')}${backdropPath}`}
        alt={title}
      />
      <p>{voteAverage}</p>
    </>
  )
}

export default MovieDetails
