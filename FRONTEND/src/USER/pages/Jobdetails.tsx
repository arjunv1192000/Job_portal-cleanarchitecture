import React from 'react'
import { Box, Stack, Grid } from '@mui/material'
import Header from '../components/Header';
import Background from '../components/Background';
import Jobpostdetails from '../components/Jobpostdetails';
import Footer from '../components/Footer'


function Jobdetails() {
    return (
        <Box >

            <Stack direction={'column'}  >
                <Header />
                <Background />
                <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6,zIndex:1 }}>
                <Jobpostdetails />

                </Box>
                
                <Footer/>

            </Stack>


        </Box>
    )
}

export default Jobdetails