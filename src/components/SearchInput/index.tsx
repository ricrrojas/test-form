import { useCallback } from 'react'
import { styled } from '@/theme/stitches.config'
import { Input } from '../Input'

const SearchWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})

const Label = styled('label', {
  display: 'flex',
  flexDirection: 'row',
  fontWeight: 'bold',
  color: '$lightColor',
})

const debounce =
  (timeMS = 500) =>
  (func: (...args: string[]) => void) => {
    let timer: NodeJS.Timeout | null
    return (...args: string[]) => {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const context = this
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, timeMS)
    }
  }

export const SearchInput = ({ onSearchInput }: { onSearchInput: (value: string) => void }) => {
  if (!onSearchInput) {
    // assert('onSearchInput cant be null')
  }
  const optimizedFn = useCallback(debounce()(onSearchInput), [])

  return (
    <SearchWrapper>
      <div style={{ margin: 'auto', paddingRight: '1rem' }}>
        <Label>Search</Label>
      </div>
      <Input onChange={(e) => optimizedFn(e.target.value)} />
    </SearchWrapper>
  )
}
