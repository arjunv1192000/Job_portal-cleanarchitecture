import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from '../utils/axios.ts';
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type RootState = {
    user: {
        value: {
            id: string | null;
            name: string | null;
            email: string | null;
            image: string | null;
            access_token: string;
        };
    };
};


type Props = {
    jobId: string;
    id: string;
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
    expiring: boolean;
    skills: [string]
};

const Jobpostdetails: React.FC<Props> = ({ id, jobtitle, jobType, location, date, salary, jobId, about, image, companyname, jobTiming, jobLevel, qualification, essentialKnowledge, experience, address, opening, expiring, skills }) => {


    const navigate = useNavigate()
    const userdata = useSelector((state: RootState) => state.user.value);
    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
    


    const handleApplyClick = async () => {
        try {
            const applyjob = await axios.post('/jobs/apply', { UserId: userdata.id, JobId: jobId });

            if (applyjob.data.status == true) {

                toast.success('job applied Successfully')
                setTimeout(() => {
                    navigate("/user/myjob")

                }, 1500)


            } else {
                toast.error("Already applied for this job")

            }



        } catch (error) {

            console.error('Error applying for the job:', error);
        }
    };

    const handleSaveClick = async () => {
        try {
            const savejob = await axios.post('/jobs/save', { UserId: userdata.id, JobId: jobId });

            if (savejob.data.status == true) {

                toast.success('job Saved Successfully')
                setTimeout(() => {
                    navigate("/user/savedjob")

                }, 1500)


            } else {
                toast.error("Already Saved this job")

            }



        } catch (error) {

            console.error('Error Saving this job:', error);
        }
    };

    const currentDate = new Date();
    const pastDate = new Date(date);
    let timeAgo;
    const timeDiff = currentDate.getTime() - pastDate.getTime();

    if (timeDiff < 24 * 60 * 60 * 1000) {

        const hoursAgo = Math.floor(timeDiff / (1000 * 3600));
        timeAgo = hoursAgo + " hours ago";
    } else {

        const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

        timeAgo = daysAgo + " days ago";

    }




    return (
        <Box
            sx={{
                width: "90%", height: "100%", borderRadius: 2, display: 'flex', marginLeft: 10, marginTop: 1,
                flexDirection: "column",
                alignItems: "center",
            }}>
            <Box>
                <Stack>
                    <Stack direction={'row'} spacing={120} marginTop={3}  >
                        <Typography marginLeft={3} marginTop={3} fontSize={28} fontWeight={1000}>
                            {jobtitle}
                        </Typography>
                        {expiring ? " " : <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 20, backgroundColor: "#3C6FF5" }} onClick={handleApplyClick} >Apply</Button>}

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
                        <ListItemText primary={timeAgo} />
                    </ListItemButton>
                    <Stack direction={isMobile?'column' : 'row'} >
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
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2} > {salary}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Job type:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2} >  {jobTiming}
                                        </Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Job level:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2} > {jobLevel}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Update:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2}> {date}</Typography>

                                    </Stack>


                                </Stack>
                                <Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Experiance:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2} >{experience}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Qualification:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2} > {qualification}</Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Location:

                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2} >  {location}
                                        </Typography>

                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography marginLeft={3} marginTop={4} fontSize={21} fontWeight={500} color={'black'}>
                                            Opening:
                                        </Typography >
                                        <Typography marginTop={4} fontSize={21} fontWeight={500} color={"#3C6FF5"} marginLeft={2}> {opening}</Typography>

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
                                    <Box sx={{ width: "30%", height: 100, margin: 1 }}>
                                        <img src={image} alt="Logo" style={{ width: '100%', height: '100%' }} />

                                    </Box>
                                    <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={1000} width={20}>
                                        {companyname}
                                    </Typography>


                                </Stack>
                                <Box sx={{ width: "70%", height: 170, backgroundColor: 'blueviolet', borderRadius: 5, marginTop: 1, marginLeft: 5 }}>
                                    {/* <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="Logo" style={{ width: '100%', height: '100%' }} /> */}
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9510023335224!2d76.31923637498247!3d9.938034990164187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873e8b17e4e1f%3A0x631726fd9022096b!2sBrototype%20Kochi!5e0!3m2!1sen!2sin!4v1686823328975!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Box>

                                <Typography marginTop={3} fontSize={12} fontWeight={1000} textAlign={'center'} width={350}>
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
                    {skills.map((skill, index) => (
                        <Typography key={index} marginLeft={3} marginTop={1} fontSize={14} fontWeight={500}>
                            {skill}
                        </Typography>
                    ))}
                    <Stack direction={'row'}>
                        {expiring ? " " : <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4, marginBottom: 5 }} onClick={handleApplyClick} >Apply</Button>}
                        {expiring ? "" : <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, marginTop: 5, backgroundColor: "#3C6FF5", marginLeft: 4, marginBottom: 5 }} onClick={handleSaveClick}>Save</Button>}

                    </Stack>


                </Stack>


            </Box>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />

        </Box>

    )
}

export default Jobpostdetails