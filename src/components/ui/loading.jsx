import React from 'react';
import { Backdrop, CircularProgress} from '@mui/material';

export default function Loading() {
  return (
    <Backdrop
      open
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}