import { NavLink } from 'react-router-dom'

import { route } from '@/app/routes/routes'
import * as S from './style'
import { IMAGES } from '@/features/movies/api/constants'
import type { CastMember } from '@/features/movies/api/types'

interface MovieCreditsProps {
  cast: CastMember[]
}

const MovieCredits = ({ cast }: MovieCreditsProps) => {
  return (
    <>
      <S.MovieCreditsTitle>Cast</S.MovieCreditsTitle>
      <S.MovieCredits>
        {cast
          .filter(({ profile_path }) => profile_path)
          .map(({ id, name, character, profile_path }) => (
            <S.MovieCreditsItem key={`movie-credits-cast-${id}`}>
              <NavLink to={route.actor.replace(':actorId', String(id))}>
                <S.MovieCreditsPhoto>
                  <img
                    src={`${IMAGES.url}${IMAGES.presets.profile}${profile_path}`}
                    alt={name}
                  />

                  <S.MovieCreditsPhotoInfo>
                    <S.MovieCreditsName>
                      <span>{name}</span>
                    </S.MovieCreditsName>
                    <S.MovieCreditsCharacter>
                      <span>{character}</span>
                    </S.MovieCreditsCharacter>
                  </S.MovieCreditsPhotoInfo>
                </S.MovieCreditsPhoto>
              </NavLink>
            </S.MovieCreditsItem>
          ))}
      </S.MovieCredits>
    </>
  )
}

export default MovieCredits
