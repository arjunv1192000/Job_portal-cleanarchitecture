import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import profile from '../components/Profile'
import Background from '../components/Background'
import { Box, Stack } from '@mui/material'
import Profile from '../components/Profile'



function Profilepage() {
  return (
  <Box>
    <Stack>
      <Header/>
      <Background/>
      <Box sx={{ width: "60%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 40, marginTop:40, boxShadow: 6, zIndex: 1 }}>
      
       
      <Profile/>

     
        

      </Box>
      <Footer/>
    </Stack>
  </Box>
  )
}

export default Profilepage