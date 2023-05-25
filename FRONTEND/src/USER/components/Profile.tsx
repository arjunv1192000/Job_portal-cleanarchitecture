import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SchoolIcon from '@mui/icons-material/School';

function Profile() {
    return (
        <Box

            sx={{ width: "70%", height: 1000, borderRadius: 2, margin: 3,   }}>
            <Stack>
                <Stack direction={'row'}>
                    <Box

                        sx={{
                            width: 150,
                            height: 150,
                            borderRadius: 2,
                            backgroundImage: `url('https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/thumb.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            margin: 5



                        }}
                    ></Box>
                    <Stack>
                        <Typography marginTop={6} fontSize={24} fontWeight={500}>
                            ARJUN V
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={1} >
                            Fullstack Developer
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2} >
                            arjun.vmaniyara@gmail.com
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                            9745662340
                        </Typography>

                    </Stack>


                </Stack>
                <Typography fontSize={24} fontWeight={500} margin={5}>
                    About Me
                </Typography>
                <Typography fontSize={18} fontWeight={500} marginLeft={5} marginTop={1}>
                    Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!

                </Typography>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                    <AddLocationAltIcon/>
                    
                    <Typography variant="body1">Location :</Typography>
                    <Typography variant="body1">Kochi</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                     <SchoolIcon/>
                    
                    <Typography variant="body1">Education :</Typography>
                    <Typography variant="body1">B tech</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                     <SchoolIcon/>
                    
                    <Typography variant="body1">Language :</Typography>
                    <Typography variant="body1">English,malayalam</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                     <SchoolIcon/>
                    
                    <Typography variant="body1">Personal website:</Typography>
                    <Typography variant="body1">wwww.sdsdsd.com</Typography>
                </Stack>
                <Button variant="contained" sx={{ width: 200, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4 }} >Update Profile</Button>

            </Stack>

        </Box>
    )
}

export default Profile