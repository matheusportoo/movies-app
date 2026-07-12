import * as S from './style'
import { formatDate } from '@/shared/utils/format-date'
import { IMAGE_PATH } from '@/features/movies/api/constants'

interface ActorDetailsProps {
  name?: string
  biography?: string
  birthday?: string | null
  placeOfBirth?: string | null
  profilePath?: string | null
}

const ActorDetails = ({
  name,
  biography,
  birthday,
  placeOfBirth,
  profilePath,
}: ActorDetailsProps) => {
  return (
    <S.ActorDetailsProfile>
      {profilePath && (
        <S.ActorDetailsPhoto>
          <img src={`${IMAGE_PATH('poster2x')}${profilePath}`} alt={name} />
        </S.ActorDetailsPhoto>
      )}

      <S.ActorDetailsInfo>
        <S.ActorDetailsTitle>{name}</S.ActorDetailsTitle>

        <S.ActorDetailsMeta>
          {birthday && (
            <p>
              <span>birthday:</span>
              <br />
              <span>{formatDate(birthday)}</span>
            </p>
          )}
          {placeOfBirth && (
            <p>
              <span>place of birth:</span>
              <br />
              <span>{placeOfBirth}</span>
            </p>
          )}
        </S.ActorDetailsMeta>

        {biography && <S.ActorDetailsText>{biography}</S.ActorDetailsText>}
      </S.ActorDetailsInfo>
    </S.ActorDetailsProfile>
  )
}

export default ActorDetails
