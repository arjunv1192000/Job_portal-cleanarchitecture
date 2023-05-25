import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Sidebarprofile from '../components/Sidebarprofile';
import Profile from '../components/Profile';
import Footer from '../components/Footer'

function Userprofile() {
  return (
    <Box >

    <Stack direction={'column'}  >
        <Header />
        <Background />

        <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6,zIndex:1 }}>
        <Stack direction={'row'}>
            <Sidebarprofile/>
            <Profile/>
          
        </Stack>

        </Box>
       

        

      
       <Footer/>
    </Stack>
  


</Box>
    
  )
}

export default Userprofile