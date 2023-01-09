import { mockBets } from './constants'

export const getFilteredAndSortedBets = () => {
  const todayDate = new Date().toISOString()

  const filteredAndSortedBets = mockBets.filter((item) => new Date(item.date) > new Date(todayDate))
    .sort((firstItem, secondItem) => new Date(firstItem.date) - new Date(secondItem.date))

  return filteredAndSortedBets
}