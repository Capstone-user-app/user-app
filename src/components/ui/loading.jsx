import React from 'react'
import { Backdrop, CircularProgress} from '@mui/material'


const Loading = () => (
    <Backdrop
      open
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )

export default Loading
