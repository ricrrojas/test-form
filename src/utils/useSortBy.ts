import React, { useMemo, useState } from 'react'

export const useSortBy = <T>(
  data: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc',
): [
  T[],
  {
    sortKey: keyof T
    sortDirection: 'asc' | 'desc'
  },
  React.Dispatch<React.SetStateAction<keyof T>>,
  React.Dispatch<React.SetStateAction<'asc' | 'desc'>>,
] => {
  const [sortKey, setSortKey] = useState(key)
  const [sortDirection, setSortDirection] = useState(direction)

  const sortArray = useMemo(() => {
    return data.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortDirection === 'asc' ? -1 : 1
      }
      if (a[sortKey] > b[sortKey]) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [data, sortDirection, sortKey])

  return [sortArray, { sortKey, sortDirection }, setSortKey, setSortDirection]
}
