import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import { Box, Stack,Grid } from '@mui/material'
import Applicant from '../components/Applicant'

function Applicantsdetails() {
  return (
    <Box>
    <Header/>
    <Stack direction={'row'} spacing={2} marginTop={10}  >
        <SideBar/>
        <Box sx={{ width: "78%", height: 'auto', borderRadius: 2 }}>
            <Applicant/>
            <Applicant/>
            <Applicant/>
       
        </Box>
        
       
    </Stack>
    <Footer/>
    


</Box>
   
  )
}

export default Applicantsdetails