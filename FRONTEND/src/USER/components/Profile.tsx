import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SchoolIcon from '@mui/icons-material/School';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axios from '../utils/axios.ts'
type RootState = {
    user: {
        value: {
            id: string | null;
            name: string | null;
            email: string | null;
            image: string | null;
            access_token: string;
        };
    };
};




function Profile() {
    const user = useSelector((state: RootState) => state.user.value);
    const [profile, setprofile] = useState<any>(null);

    const id = user.id


    useEffect(() => {
        axios.get('/profile/getprofile?id=' + id).then((response) => {
            console.log(response.data.profiledata);
            setprofile(response.data.profiledata)


        }).catch((response) => {
            console.error(response.message);



        })

    }, [id])



    return (
        <Box

            sx={{ width: "70%", height: 1000, borderRadius: 2, margin: 3, }}>
            <Stack>
                <Stack direction={'row'}>
                    <Box

                        sx={{
                            width: 150,
                            height: 150,
                            borderRadius: 2,
                            backgroundImage: `url(${profile?.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            margin: 5



                        }}
                    ></Box>
                    <Stack>
                        <Typography marginTop={6} fontSize={24} fontWeight={500}>
                            {profile?.name}

                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={1} >
                            {profile?.jobRole}

                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2} >
                            {profile?.email}

                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                            {profile?.phone}

                        </Typography>

                    </Stack>


                </Stack>
                <Typography fontSize={24} fontWeight={500} margin={5}>
                    About Me
                </Typography>
                <Typography fontSize={18} fontWeight={500} marginLeft={5} marginTop={1}>
                    {profile?.about}
                </Typography>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                    <AddLocationAltIcon />

                    <Typography variant="body1">Location :</Typography>
                    <Typography variant="body1"> {profile?.location}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                    <SchoolIcon />

                    <Typography variant="body1">Education :</Typography>
                    <Typography variant="body1">  {profile?.education} </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={3} margin={3}>
                    <SchoolIcon />

                    <Typography variant="body1">Language :</Typography>
                    <Typography variant="body1">  {profile?.language} </Typography>
                </Stack>
                {/* <Stack direction="row" alignItems="center" gap={3} margin={3}>
                     <SchoolIcon/>
                    
                    <Typography variant="body1">Personal website:</Typography>
                    <Typography variant="body1">wwww.sdsdsd.com</Typography>
                </Stack> */}
                <Button variant="contained" sx={{ width: 200, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4 }} >Update Profile</Button>

            </Stack>

        </Box>
    )
}

export default Profile