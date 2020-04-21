const getDateFormated = (date) =>
  date && new Date(date).toDateString().substring(4)

export default getDateFormated
