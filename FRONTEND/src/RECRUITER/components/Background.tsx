import React from 'react'
import { Box, Stack } from '@mui/material'

function Background() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 400,
        borderRadius: 2,
        backgroundImage: `url('https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/thumb.png')`,
        backgroundSize: 'cover',
        position: 'fixed'
      }}
    >
        




    </Box>
    
  )
}

export default Background