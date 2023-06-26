import React from 'react';
import {
  Box,
  Stack,
  Typography,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Button,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from '../utils/axios'
import toast, { Toaster } from 'react-hot-toast';

type RootState = {
  recruiter: {
    value: {
      id: string | null;
      companyname: string | null;
      name: string | null;
      email: string | null;
      image: string | null;
      access_token: string;
    };
  };
};

type Props = {
  jobid: string;
  jobtitle: string;
  about: string;
  salary: string;
  expiring:boolean;
  fetchData:() => void
};

const Dashboard: React.FC<Props> = ({ jobid, jobtitle, about, salary ,expiring,fetchData}) => {
  const navigate = useNavigate();
  const recruiterdata = useSelector((state: RootState) => state.recruiter.value);
  const handleUnlistClick = async () => {
    try {

      const unlist = await axios.post('/jobs/unlist', { JobId: jobid });
    
      if (unlist.data.status == true) {

        toast.success('job unlist Successfully')
        fetchData()
    

      } 
    } catch (error) {

      console.error('Error unlisting for the job:', error);
    }
  };



  return (
    <Box sx={{ width: '90%', height: 'auto', borderRadius: 2, boxShadow: 6, backgroundColor: 'white', marginTop: 1 }}>
      <Stack>
        <Stack direction={'row'}>
          <Avatar
            alt=""
            src={recruiterdata.image}
            sx={{ width: 50, height: 50, marginTop: 4, marginLeft: 3 }}
          />
          <Typography marginLeft={3} marginTop={7} fontSize={21} fontWeight={500}>
            {recruiterdata.companyname}


          </Typography>
        </Stack>
        <Typography marginLeft={3} marginTop={3} fontSize={26} fontWeight={500}>
          {jobtitle}


        </Typography>
        <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={300} width={"80%"}>
          {about}

        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary={salary} />
        </ListItemButton>
        <Stack direction={'row'} marginTop={2} spacing={15} marginLeft={3} marginBottom={4}>
          <Button startIcon={<PersonIcon />} onClick={() => navigate(`/recruiter/applicants/${jobid}`)}>
            Applicants
          </Button>
          {expiring ? " ":<Button variant="contained" sx={{ width: 150, height: 40, borderRadius: 2, backgroundColor: '#3C6FF5', marginRight: 3 }} onClick={() => navigate(`/recruiter/jobedit/${jobid}`)}>  Edit
          </Button>}
          
         {expiring ? " " :<Button variant="contained" sx={{ width: 150, height: 40, borderRadius: 2, backgroundColor: '#EA6A6A', marginRight: 3 }} onClick={handleUnlistClick}>
            Unlist
          </Button>} 
        </Stack>
      </Stack>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </Box>
  );
};

export default Dashboard;
