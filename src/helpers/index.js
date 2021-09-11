export function sortByDates(a, b) {
  return (new Date(a.date).valueOf() - new Date(b.date).valueOf())
}