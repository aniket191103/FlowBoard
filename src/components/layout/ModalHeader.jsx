import React from 'react'
import {Stack,Typography,IconButton} from '@mui/material'
import Close from '@mui/icons-material/Close'



const ModalHeader = ({title,onClose}) => {
  return (
    <div>
      <Stack direction= "row" justifyContent="space-between" alignItems="center">
          <Typography   variant="h6">{title}</Typography>

          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton> 
         </Stack>
    </div>
  )
}

export default ModalHeader
