import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from '../utils/axios.ts';
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

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
    recruiterId:string;
    jobTitle: string;
    jobType: string;
    location: string;
    salary: string;
    date: string;
    about:string;
    image:string;
    companyname:string;
    
  };

const Savedjobs: React.FC<Props>=({jobId,recruiterId,jobTitle,jobType,location,salary,date,about,image,companyname})=> {
    const navigate=useNavigate()
    const userdata = useSelector((state: RootState) => state.user.value);
  
    
    const handleApplyClick = async () => {
        try {
            const applyjob = await axios.post('/jobs/applyinSaved', { UserId: userdata.id, JobId: jobId });
            console.log(applyjob.data);
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
    

  return (
    <div>
            <Box sx={{ width: "90%", height: 350, borderRadius: 2, margin: 5, boxShadow: 6, backgroundColor: 'white' }}>
            <Stack>
                <Stack direction={'row'}>
                    <Avatar
                        alt=""
                        src={image}
                        sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 3 }}
                    />
                    <Typography marginLeft={3} marginTop={7} fontSize={21} fontWeight={500}>
                        {companyname}
                    </Typography>



                </Stack>
                <Typography marginLeft={3} marginTop={3} fontSize={26} fontWeight={500}>
                   {jobTitle}
                </Typography>
                <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={300}>
                   {about}

                </Typography>
                <Stack direction={'row'} marginTop={4}>
                    <ListItemButton   >
                        <ListItemIcon>
                            <AccountBoxIcon />

                        </ListItemIcon>
                        <ListItemText primary={salary} />
                    </ListItemButton>

                    <Button variant="contained" sx={{ width: 200,height:40, borderRadius: 2, backgroundColor: "#3C6FF5" ,marginRight:3}} onClick={handleApplyClick} >Apply</Button>


                </Stack>

            </Stack>

        </Box>
        <Toaster
                position="bottom-center"
                reverseOrder={false}
            />

    </div>
  )
}

export default Savedjobs