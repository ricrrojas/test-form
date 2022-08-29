import { styled } from '@/theme/stitches.config'

export const TableRoot = styled('table', {
  borderCollapse: 'collapse',
  textAlign: 'left',
  width: '100%',
})

export const TableRow = styled('tr', {
  background: 'white',
  borderBottom: '1px solid',
  padding: '10px 20px',
  '@bp1': {
    borderBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  '&:nth-of-type(odd)': {
    background: '$tableRowBgColor',
  },
})

export const TH = styled('th', {
  background: '$tableHeaderBgColor',
  fontWeight: 900,
  color: '$lightColor',
  variants: {
    sortable: {
      true: {
        cursor: 'pointer',
      },
    },
  },
})

export const TableHead = styled('thead', {
  '@bp1': {
    left: '-9999px',
    position: 'absolute',
    visibility: 'hidden',
  },
})

export const TableCell = styled('td', {
  '@bp1': {
    border: '1px solid',
    margin: '0 -1px -1px 0',
    paddingTop: '35px',
    position: 'relative',
    width: '100%',
    '& span': {
      display: 'block !important',
    },
  },
  '& span': {
    background: '#eee',
    color: 'dimgrey',
    display: 'none',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '5px',
    position: 'absolute',
    textTransform: 'uppercase',
    top: 0,
    left: 0,
  },
})

const ArrowUpIcon = () => (
  <svg width='16px' height='16px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z'
      fill='#515151'
    />
  </svg>
)

const ArrowDownIcon = () => (
  <svg width='16px' height='16px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z'
      fill='#515151'
    />
  </svg>
)

const OrderDirectionWrapper = styled('div', {
  padding: '$2',
})

export const OrderDirection = ({
  direction,
  column = '',
  sortKey = '',
}: {
  direction?: 'asc' | 'desc'
  column: string
  sortKey: string
}) =>
  column === sortKey ? (
    <OrderDirectionWrapper>
      {direction === 'asc' ? <ArrowDownIcon /> : <ArrowUpIcon />}
    </OrderDirectionWrapper>
  ) : (
    <></>
  )

export const TextCenter = styled('div', {
  padding: '$2',
})

export const Text = styled('label', {
  color: '$lightColor',
})
