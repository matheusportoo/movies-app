export const formatDate = (date?: string): string | undefined =>
  date && new Date(date).toDateString().substring(4)
