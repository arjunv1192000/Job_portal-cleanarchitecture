import React from 'react'
import { Box, Stack, Grid,Typography } from '@mui/material'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Search from '../components/Search';
import Rightbar from '../components/Rightbar';
import Jobpost from '../components/Jobpost';
import Footer from '../components/Footer'
import Background from '../components/Background';

function Landingpage() {
    return (
        <Box >
            <Stack>
                <Header />
                <Background />
                <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
                    <Stack>
                        <Typography marginTop={6} fontSize={24} fontWeight={500} textAlign={'center'}>
                            Browse by category
                        </Typography>
                        <Rightbar />

                        <Stack direction={'row'} sx={{ marginTop: 10, marginLeft: 3 }} spacing={1}>

                            <SideBar />
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:1,}} >
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />
                                <Jobpost />



                            </Grid>


                        </Stack>



                    </Stack>

                </Box>

                <Footer />




            </Stack>







        </Box>


    )
}

export default Landingpage