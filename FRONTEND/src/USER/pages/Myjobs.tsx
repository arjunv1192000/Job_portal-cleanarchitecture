import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Sidebarprofile from '../components/Sidebarprofile';
import Userjobs from '../components/Userjobs';
import Footer from '../components/Footer';

function Myjobs() {
    return (
        <Box >

            <Stack direction={'column'}  >
                <Header />
                <Background />

                <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6 ,zIndex:1}}>
                <Stack direction={'row'}>
                    <Sidebarprofile />
                    <Box sx={{ width: "70%", height: 'auto', borderRadius: 2,   }}>
                        <Userjobs/>
                        <Userjobs/>
                        <Userjobs/> 
                        <Userjobs/>
                        <Userjobs/>

                    </Box>


                </Stack>


                </Box>

                

                <Footer/>
            </Stack>

           


        </Box>
    )
}

export default Myjobs