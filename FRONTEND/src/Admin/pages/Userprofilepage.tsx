import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Footer from '../components/Footer'
import Userprofile from '../components/Userprofile';

function Userprofilepage() {
  return (
    <Box >

    <Stack direction={'column'}  >
        <Header />
        <Background />

        <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6,zIndex:1 }}>
        <Stack direction={'column'}>
            <Userprofile/>
           
        </Stack>

        </Box>
       

        

      
       <Footer/>
    </Stack>
  


</Box>
   
  )
}

export default Userprofilepage