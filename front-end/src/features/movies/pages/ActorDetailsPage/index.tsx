import { useParams } from 'react-router-dom'

import Container from '@/shared/components/Container'
import ActorDetails from '@/features/movies/components/ActorDetails'
import ListingMoviesByCategory from '@/features/movies/components/ListingMoviesByCategory'
import { useActorDetails } from '@/features/movies/hooks/useActorDetails'
import * as S from './style'

const ActorDetailsPage = () => {
  const { actorId = '' } = useParams<{ actorId: string }>()
  const { details, movies, isLoadingDetails, isLoadingMovies } = useActorDetails(actorId)

  return (
    <Container>
      <S.PageActorDetails>
        {!isLoadingDetails ? (
          <ActorDetails
            name={details.name}
            biography={details.biography}
            birthday={details.birthday}
            placeOfBirth={details.place_of_birth}
            profilePath={details.profile_path}
          />
        ) : null}

        <S.PageActorDetailsWidget>
          <ListingMoviesByCategory
            title="Movies"
            movies={movies}
            slug="actor-movies"
            isFetching={isLoadingMovies}
          />
        </S.PageActorDetailsWidget>
      </S.PageActorDetails>
    </Container>
  )
}

export default ActorDetailsPage
