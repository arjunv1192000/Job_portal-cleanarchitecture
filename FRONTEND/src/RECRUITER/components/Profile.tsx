import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom';


type RootState = {
    recruiter: {
        value: {
            id: string | null;
            companyname: string | null;
            name: string | null;
            email: string | null;
            image: string | null;
            access_token: string;
        };
    };
};

function Profile() {
    const recruiterdata = useSelector((state: RootState) => state.recruiter.value);
    const navigate = useNavigate();

    const [Profile, setProfile] = useState<any>(null);

    const id = recruiterdata.id



    useEffect(() => {
        axios.get('/profile/getprofile?id=' + id).then((response) => {
            console.log(response.data.profiledata);
            setProfile(response.data.profiledata)


        }).catch((response) => {
            console.error(response.message);



        })

    }, [id])




    return (
        <Box

            sx={{ width: "70%", height: 1000, borderRadius: 2, margin: 3, }}>
            <Stack >
                <Box

                    sx={{ width: "70%", height: 1000, borderRadius: 2, margin: 3, }}>
                    <Stack>
                        <Stack>
                            <Box

                                sx={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 2,
                                    backgroundImage: Profile?.image ? `url(${Profile.image})` : undefined,
                                    backgroundSize: 'cover',





                                }}
                            ></Box>
                            <Stack>
                                <Typography marginTop={6} fontSize={24} fontWeight={500} >
                                    {Profile?.name}

                                </Typography>
                                <Typography fontSize={16} fontWeight={500} paddingTop={1} width={200}>
                                    {Profile?.companyname}


                                </Typography>
                                <Typography fontSize={16} fontWeight={500} paddingTop={2} >
                                    {Profile?.email}


                                </Typography>
                                <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                                    {Profile?.phone}

                                </Typography>
                                <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                                    {Profile?.about}

                                </Typography>

                            </Stack>


                        </Stack>
                        <Button
                            variant="contained"
                            sx={{
                                width: 200,
                                borderRadius: 2,
                                alignContent: 'center',
                                marginLeft: 6,
                                marginTop: 3,
                                backgroundColor: '#3C6FF5',
                            }}
                            onClick={() => navigate('/recruiter/updateprofile')}
                        >
                            Update profile
                        </Button>



                    </Stack>

                </Box>



            </Stack>

        </Box>
    )
}

export default Profile