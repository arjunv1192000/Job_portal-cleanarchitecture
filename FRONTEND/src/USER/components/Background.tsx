import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Header from './Header'





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
      <Typography marginTop={6} fontSize={40} fontWeight={1000} textAlign={'center'} color={'greenyellow'}>
        The #1 Job Board for
        Hiring or Find Your Next Job
      </Typography>




    </Box>
  )
}

export default Background
