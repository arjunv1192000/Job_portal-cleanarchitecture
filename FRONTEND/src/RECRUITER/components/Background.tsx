import React from 'react'
import { Box, Stack } from '@mui/material'

function Background() {
  return (
    <Box
          
          sx={{
            width: "90%",
            height: 300,
            borderRadius: 2,
            backgroundImage: `url('https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/thumb.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            marginLeft:10,
            marginTop:10
            
        
          }}
        ></Box>
    
  )
}

export default Background