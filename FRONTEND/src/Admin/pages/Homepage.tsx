import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Footer from '../components/Footer'
import Userdata from '../components/Userdata';
import { useEffect, useState } from 'react';
import axios from '../utils/axios'

type User = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    userId: string;
    isBlock: boolean;
};


function Homepage() {

    const [user, setuser] = useState<User[]>([]);

    const fetchData = () => {

        axios.get('/getuserdetails')
            .then((response) => {
                console.log(response.data.userdata);
                setuser(response.data.userdata);
            })
            .catch((response) => {
                console.error(response.message);
            });
    }


    useEffect(() => {
        fetchData()

    }, []);
    return (

        <Box >

            <Stack direction={'column'}  >
                <Header />
                <Background />

                <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
                    <Stack direction={'column'}>
                        {user.map((data) =>

                            <Userdata userId={data?._id} name={data?.name} email={data?.email} phone={data?.phone} isBlock={data?.isBlock} fetchData={fetchData} />

                        )}



                    </Stack>

                </Box>





                <Footer />
            </Stack>



        </Box>

    )
}

export default Homepage