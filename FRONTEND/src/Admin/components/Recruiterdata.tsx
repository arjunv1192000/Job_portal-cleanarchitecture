import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography, MenuItem,Select } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import toast, { Toaster } from 'react-hot-toast';


type Props = {
    recruiterId: string;
    name: string;
    email: string;
    companyname: string;
    image:string;
    isBlock:boolean;
    fetchData: () => void
};

const  Recruiterdata : React.FC<Props> =({recruiterId,name,companyname,email,image,isBlock,fetchData})=> {
    const navigate=useNavigate()
    const handleBlockClick = async () => {
        try {

            const Block = await axios.post('/recruiterblock', { recruiterId:recruiterId});

            if (Block.data.status == true) {

                toast.success('recruiter block Successfully')
                fetchData()


            }
        } catch (error) {

            console.error('Error blocking  the user:', error);
        }
    };
    const handleUnblockClick = async () => {
        try {

            const Block = await axios.post('/recruiterUnblock', { recruiterId:recruiterId});

            if (Block.data.status == true) {

                toast.success('recruiter Unblock Successfully')
                fetchData()


            }
        } catch (error) {

            console.error('Error blocking  the user:', error);
        }
    };


    return (
        <Box sx={{ width: "70%", height: 180, borderRadius: 2, boxShadow: 6, backgroundColor: 'white', marginTop: 3, marginLeft: 30 }}>
            <Stack direction={'row'} spacing={5} marginTop={7}>
                <Avatar
                    alt=""
                    src={image}
                    sx={{ width: 50, height: 50, marginTop: 1, marginLeft: 3 }}
                />

                <Typography marginLeft={3} fontSize={21} fontWeight={500}>
                   {name}
                </Typography>
                <Typography marginLeft={3} fontSize={21} fontWeight={500}>
                   {companyname}
                </Typography>
                <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2}>
                    {email}
                </Typography>
                <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, backgroundColor: '#3C6FF5', marginRight: 3 }}   onClick={() => navigate(`/admin/recruiterjobs/${recruiterId}`)}>Jobs </Button>
                <Button
                    variant="contained"
                    sx={{
                        width: 100,
                        height: 40,
                        borderRadius: 2,
                        backgroundColor: isBlock ? 'green' : 'red',
                        marginRight: 3
                    }}
                    onClick={isBlock ? handleUnblockClick : handleBlockClick}
                >
                    {isBlock ? 'Unblock' : 'Block'}
                </Button>




            </Stack>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />



        </Box>
    )
}

export default Recruiterdata