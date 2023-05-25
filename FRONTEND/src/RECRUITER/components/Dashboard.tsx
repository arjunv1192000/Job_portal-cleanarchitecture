import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate=useNavigate()
    return (
        
            <Box sx={{ width: "90%", height: 350, borderRadius: 2 , boxShadow: 6, backgroundColor: 'white',marginTop:1 }}>
                <Stack>
                    <Stack direction={'row'}>
                        <Avatar
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3C2p4F7n9zvRLQufC2NGXHHgT9v5sKFtNTUA6odQ&s"
                            sx={{ width: 50, height: 50, marginTop: 4, marginLeft: 3 }}
                        />
                        <Typography marginLeft={3} marginTop={7} fontSize={21} fontWeight={500}>
                            Facebook
                        </Typography>



                    </Stack>
                    <Typography marginLeft={3} marginTop={3} fontSize={26} fontWeight={500}>
                        UX Designer & Researcher remote
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={300}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur

                    </Typography>
                    <ListItemButton   >
                        <ListItemIcon>
                            <AccountBoxIcon />

                        </ListItemIcon>
                        <ListItemText primary="8-10LPA" />
                    </ListItemButton>
                    <Stack direction={'row'} marginTop={2} spacing={15} marginLeft={3}>

                        <Button  startIcon={<PersonIcon/>} onClick={() => navigate('/recruiter/applicants')}>
                        Applicants
                        </Button>
                        <Button variant="contained" sx={{ width: 150, height: 40, borderRadius: 2, backgroundColor: "#3C6FF5", marginRight: 3 }} >Edit</Button>
                        <Button variant="contained" sx={{ width: 150, height: 40, borderRadius: 2, backgroundColor: "#EA6A6A", marginRight: 3 }} >Unlist</Button>


                    </Stack>

                </Stack>

            </Box>



       


    )
}

export default Dashboard