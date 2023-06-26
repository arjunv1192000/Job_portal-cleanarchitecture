import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios.ts';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';

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
  location: string;
  salary: string;
  date: string;
  about: string;
  image: string;
  companyname: string;
  expiring: boolean;
  skills: [string];

};

const Jobpost2: React.FC<Props> = ({ jobId, id, jobtitle, jobType, location, salary, date, about, image, companyname, expiring, skills }) => {
  const navigate = useNavigate()
  const userdata = useSelector((state: RootState) => state.user.value);
  const [saved, setSaved] = useState(false);
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

    setSaved(!saved);
    try {
      const savejob = await axios.post('/jobs/save', { UserId: userdata.id, JobId: jobId });

      if (savejob.data.status == true) {

        toast.success('job Saved Successfully')



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
    <Box marginLeft={1} sx={{ width: 400, height: 'auto', borderRadius: 2, boxShadow: 6, marginBottom: 2, opacity: expiring ? 0.6 : 1, }}  >
      <Stack >
        <Stack direction={'row'}>
          <Avatar
            alt=""
            src={image}
            sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 1 }}
          />

          <Typography marginLeft={3} marginTop={7} fontSize={16} fontWeight={500} width={150}>
            {companyname}
          </Typography>
          <ListItemButton sx={{ marginTop: 6, marginLeft: 1 }} onClick={() => navigate(`/user/jobdetails/${jobId}`)} >
            <ListItemIcon>
              <AddLocationAltIcon />

            </ListItemIcon>
            <ListItemText primary={location} />
          </ListItemButton>

        </Stack>
        <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500} onClick={() => navigate(`/user/jobdetails/${jobId}`)}>
          {jobtitle}
        </Typography>
        <Stack direction={'row'} spacing={2} marginTop={3}>
          <ListItemButton  >
            <ListItemIcon>
              <AccountBoxIcon />

            </ListItemIcon>
            <ListItemText primary={jobType} onClick={() => navigate(`/user/jobdetails/${jobId}`)} />
          </ListItemButton>
          <ListItemButton  >
            <ListItemIcon>
              <AccessTimeIcon />

            </ListItemIcon>
            <ListItemText primary={timeAgo} />
          </ListItemButton>

        </Stack>
        <Typography
          marginLeft={3}
          marginTop={3}
          fontSize={16}
          fontWeight={300}
          style={{ wordWrap: 'break-word', maxWidth: '400px', height: '100px' }}
        >
          {about}
        </Typography>
        <Stack direction="row" marginTop={5} marginLeft={4} flexDirection="row">
          {skills.map((skill, index) => (
            <ListItemText key={index} primary={skill} />
          ))}
        </Stack>
        <Stack direction={'row'} marginTop={3}>
          <ListItemButton >
            <ListItemIcon>
              <CurrencyRupeeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={salary} />
          </ListItemButton>


          {expiring ? (<Typography sx={{ marginRight: 5, marginTop: 1, color: 'red' }}>job expired</Typography>) : (<Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, backgroundColor: "#3C6FF5", marginRight: 1 }} onClick={handleApplyClick}>Apply</Button>)}

        </Stack>

        <ListItemButton sx={{ width: 120 }} onClick={handleSaveClick}>
          <ListItemIcon>
            {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </ListItemIcon>
          <ListItemText primary={saved ? 'Saved' : 'Save'} />
        </ListItemButton>

      </Stack>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

    </Box>

  )
}

export default Jobpost2