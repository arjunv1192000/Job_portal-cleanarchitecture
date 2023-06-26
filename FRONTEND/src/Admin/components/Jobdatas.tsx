import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Avatar from '@mui/material/Avatar';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../utils/axios'

type Props = {
    id: string;
    jobId: string;
    recruiterId: string;
    jobtitle: string;
    jobType: string;
    location: string;
    salary: string;
    date: string;
    image: string;
    companyname: string;
    expiring:boolean;
    fetchData: () => void

};

const Jobdatas: React.FC<Props> = ({ jobId, id, jobtitle, jobType, location, salary, date ,fetchData,expiring }) => {

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
    const handleUnlistClick = async () => {
        try {

            const unlist = await axios.post('/jobsunlist', { JobId: jobId });

            if (unlist.data.status == true) {

                toast.success('job unlist Successfully')
                fetchData()


            }
        } catch (error) {

            console.error('Error unlisting for the job:', error);
        }
    };



    return (
        <Box marginLeft={1} sx={{ width: 300, height: 'auto', borderRadius: 2, boxShadow: 6, backgroundColor: "white", marginBottom: 3 }} >
            <Stack >
                <Stack direction={'row'}>
                    {/* <Avatar
                        alt=""
                        src={image}
                        sx={{ width: 50, height: 50, marginTop: -2, marginLeft: 1.5 }}
                    />

                    <Typography marginLeft={2} marginTop={2} fontSize={16} fontWeight={500} width={100}>
                    {companyname}
                    </Typography> */}
                    <Typography marginLeft={5} marginTop={2.5} fontSize={12} fontWeight={500}>
                        {location}
                    </Typography>


                </Stack>
                <Typography marginLeft={3} marginTop={2} fontSize={16} fontWeight={500}>
                    {jobtitle}
                </Typography>
                <Stack direction={'row'} marginTop={3}>
                    <ListItemButton   >
                        <ListItemIcon>
                            <CurrencyRupeeOutlinedIcon />

                        </ListItemIcon>
                        <ListItemText primary={salary} />
                    </ListItemButton>

                </Stack>
                <Stack direction={'row'}>
                    <ListItemButton   >
                        <ListItemText primary={jobType} />
                    </ListItemButton>
                    <ListItemButton   >
                        <ListItemText primary={timeAgo} />
                    </ListItemButton>

                </Stack>
                {expiring ? <Typography marginLeft={3} marginTop={2} fontSize={16} fontWeight={500}>
                   job Unlisted
                </Typography> :<Button variant="contained" sx={{ width: 80, height: 30, borderRadius: 2, backgroundColor: 'red', margin: 4 }} onClick={handleUnlistClick} >Unlist</Button>     }
                



            </Stack>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />

        </Box>

    )
}

export default Jobdatas