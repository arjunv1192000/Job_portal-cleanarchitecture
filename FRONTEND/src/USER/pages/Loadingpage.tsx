import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Loadingpage() {
  return (
    <Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center', height: '60vh'  }}>
    <CircularProgress />
  </Box>
    
  )
}

export default Loadingpage