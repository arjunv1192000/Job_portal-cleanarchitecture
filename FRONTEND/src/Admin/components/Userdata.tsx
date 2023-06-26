import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography, MenuItem, Select } from '@mui/material'
import axios from '../utils/axios'
import toast, { Toaster } from 'react-hot-toast';

type Props = {
    userId: string;
    name: string;
    email: string;
    phone: string;
    isBlock: boolean;
    fetchData: () => void
};

const Userdata: React.FC<Props> = ({ userId, name, email, phone, isBlock, fetchData }) => {

    const handleBlockClick = async () => {
        try {

            const Block = await axios.post('/userblock', { userId: userId });

            if (Block.data.status == true) {

                toast.success('user block Successfully')
                fetchData()


            }
        } catch (error) {

            console.error('Error blocking  the user:', error);
        }
    };
    const handleUnblockClick = async () => {
        try {

            const Block = await axios.post('/userUnblock', { userId: userId });

            if (Block.data.status == true) {

                toast.success('user Unblock Successfully')
                fetchData()


            }
        } catch (error) {

            console.error('Error blocking  the user:', error);
        }
    };


    return (
        <Box sx={{ width: "70%", height: 180, borderRadius: 2, boxShadow: 6, backgroundColor: 'white', marginTop: 3, marginLeft: 30 }}>
            <Stack direction={'row'} spacing={8} marginTop={7}>

                <Typography marginLeft={3} fontSize={21} fontWeight={500} width={200}>
                    {name}
                </Typography>
                <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2} width={200}>
                    {email}
                </Typography>
                <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2}>
                    {phone}
                </Typography>
               
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

export default Userdata