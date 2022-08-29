import { styled } from '@/theme/stitches.config'
import { keyframes } from '@stitches/react'

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Loader = styled('div', {
  display: 'inline-block',
  width: '80px',
  height: '80px',
  color: '$lightColor',
  '&:after': {
    content: ' ',
    display: 'block',
    width: '64px',
    height: '64px',
    margin: '8px',
    borderRadius: '50%',
    border: '6px solid $lightColor',
    borderColor: '$lightColor transparent $lightColor transparent',
    animation: `${rotate} 1.2s linear infinite`,
  },
})
