import { styled } from '@/theme/stitches.config'

export const Container = styled('div', {
  padding: '$4',
  '@bp1': {
    padding: 0,
  },
})

export const Heading = styled('h1', {
  color: '$lightColor',
})

export const Page = styled('div', {
  backgroundColor: '$bgPage',
  width: '100vw',
  height: '100vh',
  overflow: 'scroll',
})

export const Button = styled('button', {
  borderRadius: '50%',
  padding: '$1',
  height: '$4',
  width: '$4',
})

export const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'baseline',
})
