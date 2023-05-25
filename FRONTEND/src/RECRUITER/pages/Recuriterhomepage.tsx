import React from 'react'
import { Box, Stack,Grid } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

function Recuriterhomepage() {
  return (
    <Box>
        <Header/>
        <Stack direction={'row'} spacing={2} marginTop={10}  >
            <SideBar/>
            <Box sx={{ width: "78%", height: 'auto', borderRadius: 2, }}>
            <Dashboard/>
            <Dashboard/>
            <Dashboard/> 

            </Box>
            
           
        </Stack>
        <Footer/>
        


    </Box>
  )
}

export default Recuriterhomepage