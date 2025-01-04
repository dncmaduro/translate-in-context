import { Box } from '@radix-ui/themes'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Box p="10px" width="250px" height="250px" className="rounded-lg border-gray-200 shadow-md">
      {children}
    </Box>
  )
}
