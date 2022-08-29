export const useFilterBy = <T>(
  data: Array<T>,
  searchTerm: string,
  fields: Array<keyof T> = [],
): [Array<T>] => {
  const filtered =
    !searchTerm || searchTerm === ''
      ? data
      : data.filter((item: T) =>
          fields.some((field: keyof T) => {
            const value = item[field]
            return typeof value === 'string'
              ? value.toLowerCase().includes(searchTerm.toLowerCase())
              : true
          }),
        )
  return [filtered]
}
