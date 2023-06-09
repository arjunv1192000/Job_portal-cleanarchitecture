import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Savedjobs() {
  return (
    <div>
            <Box sx={{ width: "90%", height: 350, borderRadius: 2, margin: 5, boxShadow: 6, backgroundColor: 'white' }}>
            <Stack>
                <Stack direction={'row'}>
                    <Avatar
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3C2p4F7n9zvRLQufC2NGXHHgT9v5sKFtNTUA6odQ&s"
                        sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 3 }}
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
                <Stack direction={'row'} marginTop={4}>
                    <ListItemButton   >
                        <ListItemIcon>
                            <AccountBoxIcon />

                        </ListItemIcon>
                        <ListItemText primary="8-10LPA" />
                    </ListItemButton>

                    <Button variant="contained" sx={{ width: 200,height:40, borderRadius: 2, backgroundColor: "#3C6FF5" ,marginRight:3}} >Apply</Button>


                </Stack>

            </Stack>

        </Box>

    </div>
  )
}

export default Savedjobs