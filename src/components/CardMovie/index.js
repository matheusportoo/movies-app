import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../../constants'

const CardMovie = ({ posterPath, title, href }) => {
  return (
    <div>
      <Link to={href}>
        <img src={`${IMAGES.url}/${IMAGES.presets.poster}${posterPath}`} loading='lazy' alt={title} />
      </Link>
    </div>
  )
}

export default CardMovie
