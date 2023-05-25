import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Jobpostdetails() {
    return (
        <Box
            sx={{ width: "90%", height: "100%", borderRadius: 2, display: 'flex', marginLeft: 10, marginTop: 1, }}>
            <Box>
                <Stack>
                    <Stack direction={'row'} spacing={120} marginTop={3}  >
                        <Typography marginLeft={3} marginTop={3} fontSize={28} fontWeight={1000}>
                            UX Designer & Researcher remote
                        </Typography>
                        <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 20, backgroundColor: "#3C6FF5" }} >Apply</Button>

                    </Stack>
                    <ListItemButton  >
                        <ListItemIcon>
                            <AccountBoxIcon />

                        </ListItemIcon>
                        <ListItemText primary="Remote" />
                    </ListItemButton>
                    <ListItemButton  >
                        <ListItemIcon>
                            <AccessTimeIcon />

                        </ListItemIcon>
                        <ListItemText primary="5 minago" />
                    </ListItemButton>
                    <Stack direction={'row'} >
                        <Box sx={{ width: "70%", height: 400, borderRadius: 2, marginLeft: 1, marginTop: 1, backgroundColor: 'white', boxShadow: 6 }}>
                            <Typography variant="h6" margin={2}>Employment Information</Typography>
                           
                            <Stack >
                                <Stack direction={'row'}>
                                    <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                        Industry:

                                    </Typography >
                                    <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} >Information technology</Typography>

                                </Stack>
                                <Stack direction={'row'}>
                                    <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                        Salary:

                                    </Typography >
                                    <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} >  12-14 LPA</Typography>

                                </Stack>
                                <Stack direction={'row'}>
                                    <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                        Job type:

                                    </Typography >
                                    <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} >  Permanent
                                    </Typography>

                                </Stack>
                                <Stack direction={'row'}>
                                    <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                    Update:
                                    </Typography >
                                    <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} > 10/07/2023</Typography>

                                </Stack>

                            </Stack>

                        </Box>
                        <Box sx={{ width: "30%", height: 400, borderRadius: 2, marginLeft: 1, marginTop: 1, backgroundColor: 'white', boxShadow: 6 }}>
                            <Stack>
                                <Stack direction={'row'}>
                                    <Box sx={{ width: "40%", height: 100, margin: 1 }}>
                                        <img src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260" alt="Logo" style={{ width: '100%', height: '100%' }} />

                                    </Box>
                                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={1000} width={20}>
                                        Tata Consultancy Services
                                    </Typography>


                                </Stack>
                                <Box sx={{ width: "80%", height: 170, backgroundColor: 'blueviolet', borderRadius: 5, marginTop: 1, marginLeft: 5 }}>
                                    <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="Logo" style={{ width: '100%', height: '100%' }} />

                                </Box>
                                <Typography marginLeft={3} marginTop={3} fontSize={12} fontWeight={1000} textAlign={'center'} width={350}>
                                    Infopark. Address : Tata Consultancy Services TCS Centre SEZ Unit, Infopark PO, Kochi - 682042,Kerala India
                                </Typography>
                            </Stack>
                        </Box>

                    </Stack>




                    <Typography marginLeft={3} marginTop={3} fontSize={18} fontWeight={1000}>
                        UX Designer & Researcher remote

                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} width={800}>
                        The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.
                        The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={18} fontWeight={1000}>
                        UX Designer & Researcher remote
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} width={800}>
                        The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.
                        The ideal candidate will have

                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={18} fontWeight={1000}>
                        UX Designer & Researcher remote
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} width={800}>
                        The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.
                        The ideal candidate will have

                    </Typography>

                    <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4,marginBottom:5 }} >Apply</Button>
                </Stack>
        

            </Box>

        </Box>

    )
}

export default Jobpostdetails