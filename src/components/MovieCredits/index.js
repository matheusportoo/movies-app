import React from 'react'

import { IMAGES } from '../../constants'

const MovieCredits = ({ cast }) => {
  return (
    <>
      { cast.map(({ name, character, profile_path }, index) => (
        <div key={`movie-credits-cast-${index}`}>
          <p>{name}</p>
          <p>{character}</p>
          {profile_path && (<img
            src={`${IMAGES.url}${IMAGES.presets.profile}${profile_path}`}
            alt={name}
          />)}
        </div>
      )) }
    </>
  )
}

export default MovieCredits
