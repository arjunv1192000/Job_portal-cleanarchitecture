import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

type Props = {
    jobId: string;
    recruiterId: string;
    jobtitle: string;
    jobType: string;
    jobTiming: string;
    jobLevel: string;
    qualification: string;
    essentialKnowledge: string;
    location: string;
    salary: string;
    date: string;
    about: string;
    image: string;
    companyname: string;
    experience: string;
    address: string;
    opening: string;
};

const Jobpostdetails: React.FC<Props> = ({ recruiterId, jobtitle, jobType, location, date, salary, jobId, about, image, companyname, jobTiming, jobLevel, qualification, essentialKnowledge, experience, address, opening }) => {
    return (
        <Box
            sx={{ width: "90%", height: "100%", borderRadius: 2, display: 'flex', marginLeft: 10, marginTop: 1,
            flexDirection: "column",
            alignItems: "center", }}>
            <Box>
                <Stack>
                    <Stack direction={'row'} spacing={120} marginTop={3}  >
                        <Typography marginLeft={3} marginTop={3} fontSize={28} fontWeight={1000}>
                            {jobtitle}
                        </Typography>
                        <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 20, backgroundColor: "#3C6FF5" }} >Apply</Button>

                    </Stack>
                    <ListItemButton  >
                        <ListItemIcon>
                            <AccountBoxIcon />

                        </ListItemIcon>
                        <ListItemText primary={jobType} />
                    </ListItemButton>
                    <ListItemButton  >
                        <ListItemIcon>
                            <AccessTimeIcon />

                        </ListItemIcon>
                        <ListItemText primary={date} />
                    </ListItemButton>
                    <Stack direction={'row'} >
                        <Box sx={{ width: "70%", height: 420, borderRadius: 2, marginLeft: 1, marginTop: 1, backgroundColor: 'white', boxShadow: 6 }}>
                            <Typography variant="h6" margin={2}>Employment Information</Typography>
                            <Stack direction={'row'} spacing={4} >
                                <Stack >
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Industry:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2}>Information technology</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Salary:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}marginLeft={2} > {salary}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Job type:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}marginLeft={2} >  {jobTiming}
                                        </Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Job level:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}marginLeft={2} > {jobLevel}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Update:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2}> {date}</Typography>

                                    </Stack>


                                </Stack>
                                <Stack >
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Experiance:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}marginLeft={2} >{experience}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Qualification:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}marginLeft={2} > {qualification}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Location:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}marginLeft={2} >  {location}
                                        </Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Opening:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"}  marginLeft={2}> {opening}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Deadline:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2}> {date}</Typography>

                                    </Stack>


                                </Stack>


                            </Stack>



                        </Box>
                        <Box sx={{ width: "30%", height: 420, borderRadius: 2, marginLeft: 4, marginTop: 1, backgroundColor: 'white', boxShadow: 6 }}>
                            <Stack>
                                <Stack direction={'row'}>
                                    <Box sx={{ width: "40%", height: 100, margin: 1 }}>
                                        <img src={image} alt="Logo" style={{ width: '100%', height: '100%' }} />

                                    </Box>
                                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={1000} width={20}>
                                        {companyname}
                                    </Typography>


                                </Stack>
                                <Box sx={{ width: "80%", height: 170, backgroundColor: 'blueviolet', borderRadius: 5, marginTop: 1, marginLeft: 5 }}>
                                    <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="Logo" style={{ width: '100%', height: '100%' }} />

                                </Box>
                                <Typography marginLeft={3} marginTop={3} fontSize={12} fontWeight={1000} textAlign={'center'} width={350}>
                                    {address}
                                </Typography>
                            </Stack>
                        </Box>

                    </Stack>

                    <Typography marginLeft={3} marginTop={3} fontSize={18} fontWeight={1000} >
                        {jobtitle}

                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} width={800}>
                        {about}
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={18} fontWeight={1000}>
                    EssentialKnowledge
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} width={800}>
                        {essentialKnowledge}
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={18} fontWeight={1000}>
                        Skills Required
                    </Typography>
                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} width={800}>
                        The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.
                        The ideal candidate will have

                    </Typography>
                    <Stack direction={'row'}>
                    <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4, marginBottom: 5 }} >Apply</Button>
                    <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4, marginBottom: 5 }} >Save</Button>

                    </Stack>

                   
                </Stack>


            </Box>

        </Box>

    )
}

export default Jobpostdetails