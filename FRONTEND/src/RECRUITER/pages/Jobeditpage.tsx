import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Updatejob from '../components/Updatejob'

import { Box, Stack, Grid } from '@mui/material'

function Jobeditpage() {
    return (

        <Box>
            <Header />
            <Stack direction={'row'} spacing={2} marginTop={10}  >
                <SideBar />
                <Updatejob/>

                






            </Stack>
            <Footer />



        </Box>

    )
}

export default Jobeditpage