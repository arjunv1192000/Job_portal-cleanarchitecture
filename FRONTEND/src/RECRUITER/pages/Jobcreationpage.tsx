import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Creationform from '../components/Creationform'
import { Box, Stack, Grid } from '@mui/material'

function Jobcreationpage() {
    return (
        <Box>
            <Header />
            <Stack direction={'row'} spacing={2} marginTop={10}  >
                <SideBar />

                <Creationform />



        


            </Stack>
            <Footer />



        </Box>
        


    )
}

export default Jobcreationpage