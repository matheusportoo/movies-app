import type { MovieVideo } from '@/features/movies/api/types'

const YOUTUBE_SITE = 'YouTube'
const PRIORITY_TYPES = ['Trailer', 'Teaser'] as const

export const selectTrailer = (videos: MovieVideo[]): string | null => {
  const youtubeVideos = videos.filter((video) => video.site === YOUTUBE_SITE)

  if (!youtubeVideos.length) return null

  for (const type of PRIORITY_TYPES) {
    const match = youtubeVideos.find((video) => video.type === type)
    if (match) return match.key
  }

  return youtubeVideos[0].key
}
