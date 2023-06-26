import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';

type Props = {
    status: string;
    jobId: string;
    recruiterId: string;
    jobTitle: string;
    jobType: string;
    location: string;
    salary: string;
    date: string;
    about: string;
    image: string;
    companyname: string;

};


const Userjobs: React.FC<Props> = ({ jobId, recruiterId, jobTitle, jobType, location, salary, date, about, image, companyname, status }) => {
    const navigate=useNavigate()

    return (
        <Box sx={{ width: "90%", height: 'auto', borderRadius: 2, margin: 5, boxShadow: 6, backgroundColor: 'white' }}>
            <Stack>
                <Stack direction={'row'}>
                    <Avatar
                        alt=""
                        src={image}
                        sx={{ width: 50, height: 50, marginTop: 2, marginLeft: 3 }}
                    />
                    <Typography marginLeft={3} marginTop={3} fontSize={21} fontWeight={500}>
                        {companyname}
                    </Typography>

                </Stack>
                <Typography marginLeft={3} marginTop={3} fontSize={26} fontWeight={500}>
                    {jobTitle}
                </Typography>
                <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={300} width={700} height={100}>
                    {about}

                </Typography>
                <Stack direction={'row'} marginBottom={4}>
                    <ListItemButton   >
                        <ListItemText primary={salary} />
                    </ListItemButton>

                    {status === "Approved" && (
                        <Button variant="contained" sx={{ width: 200, height: 40, borderRadius: 2, backgroundColor: "#3C6FF5", marginRight: 3 }}  onClick={() =>navigate('/user/chatpage')}>
                            Chat with Recruiter
                        </Button>
                    )}


                </Stack>
                {status === "pending" && (
                    <Typography marginLeft={3} marginTop={1} fontSize={15} fontWeight={500} marginBottom={3} color={'red'}>
                        Application is pending 
                    </Typography>

                )}
                {status === "Rejected" && (
                    <Typography marginLeft={3} marginTop={1} fontSize={15} fontWeight={500} marginBottom={3} color={'red'}>
                        Not selected by Recruiter
                    </Typography>

                )}
                {status === "Approved" && (
                    <Typography marginLeft={3} marginTop={1} fontSize={15} fontWeight={500} marginBottom={3} color={'green'}>
                        Application Viewed
                    </Typography>

                )}


            </Stack>

        </Box>
    )
}

export default Userjobs