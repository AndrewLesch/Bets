import { todayDate } from "./constants";

export const filterAndSortItems = items => {
  items = items.filter((item) => new Date(item.date) > new Date(todayDate))
    .sort((firstItem, secondItem) => new Date(firstItem.date) - new Date(secondItem.date))

  return items
}