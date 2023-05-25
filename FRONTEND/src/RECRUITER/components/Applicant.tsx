import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';

function Applicant() {
    return (
        <Box sx={{ width: "90%", height: 350, borderRadius: 2, boxShadow: 6, backgroundColor: 'white',marginTop:1 }}>
            <Stack direction={'row'} spacing={4}>
                <Avatar
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3C2p4F7n9zvRLQufC2NGXHHgT9v5sKFtNTUA6odQ&s"
                    sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 3 }}
                />
                <Stack >
                <Typography marginLeft={3} marginTop={5} fontSize={21} fontWeight={500}>
                      ARJUN V
                    </Typography>
                    <Typography marginLeft={3}  fontSize={18} fontWeight={300} marginTop={2}>
                    Fullstack developer
                    </Typography>
                    <Typography marginLeft={3}  fontSize={18} fontWeight={300}  marginTop={2}>
                    arjun.vmaniyara@gmail.com
                    </Typography>
                    <Typography marginLeft={3}  fontSize={18} fontWeight={300}  marginTop={2}>
                    9745662340
                    </Typography>

                    <Button   sx={{width:200,marginTop:7}}  startIcon={<PersonIcon/>} >
                        Download CV
                        </Button>

                </Stack>
                <Stack marginLeft={1}>
                <Typography marginLeft={3} marginTop={5} fontSize={21} fontWeight={500}>
                       About Me
                    </Typography>
                    <Typography marginLeft={3}  fontSize={18} fontWeight={300}  marginTop={2} width={400}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur
                    </Typography>
                    <Button variant="contained" sx={{ width: 200, height: 40, borderRadius: 2, backgroundColor: "#3C6FF5",margin:4 }} >Chat With Applicant</Button>

                </Stack>

            </Stack>

        </Box>

    )
}

export default Applicant