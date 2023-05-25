import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar';
function Recruiterprofile() {
  return (
    <Box>
    <Stack direction={'column'}  >
    <Header />
    <Background />

    <Stack direction={'row'}>
        <SideBar/>
        
    </Stack>

    <Footer/>

</Stack>


</Box>
  )
}

export default Recruiterprofile