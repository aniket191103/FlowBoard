import { Stack,Typography } from '@mui/material'
import React from 'react'

const NoBoards = () => {
  return (
    <div>
      <Stack mt={15} textAlign="center" spacing={1}>
    <Typography variant="h5" >
      No Boards Created
    </Typography>
    <Typography  >
      Create your first board
    </Typography>
  </Stack>
    </div>
  )
}

export default NoBoards
