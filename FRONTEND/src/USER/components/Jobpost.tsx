import React from 'react'
import { Box, Stack,Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../utils/axios.ts'
import { useSelector } from "react-redux";


type RootState = {
  user: {
    value: {
      id: string | null;
      name: string | null;
      email: string | null;
      image: string | null;
      access_token: string;
      profile: boolean | null;
    };
  };
};

type Props = {
  jobId: string;
  recruiterId:string;
  jobtitle: string;
  jobType: string;
  location: string;
  salary: string;
  date: string;
  image:string;
  companyname:string;
  id:string;
};


const Jobpost: React.FC<Props>=({jobId,id,jobtitle,jobType,location,salary,date,image,companyname})=> {
  const navigate=useNavigate()

  const userdata = useSelector((state: RootState) => state.user.value);
  console.log(userdata, "profilesetting")
    const  userId=userdata.id
    console.log(userId);
    
 const[user,setuser]=useState<any>()

  useEffect(() => {
    const getuser = () => {
      axios.get('/getuserdata?id=' + userId)
        .then((response) => {
          setuser(response.data.userdata)
          console.log(response.data.userdata);
          
        
          


        })
        .catch((error) => {
          console.error(error.message);
        });

    }
    getuser()


  }, [userId]);
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
    <Box marginLeft={1} sx={{ width: 300 , height:280, borderRadius: 2, boxShadow: 6,backgroundColor:"white",marginBottom:3 }}  onClick={() =>{ user ?.profile ? navigate(`/user/jobdetails/${jobId}`): navigate('/user/addprofile')}  }>
      <Stack >
      <Stack direction={'row'}>
          <Avatar
            alt=""
            src={image}
            sx={{ width: 50, height: 50, marginTop:-2, marginLeft: 1.5 }}
          />

          <Typography marginLeft={2} marginTop={2} fontSize={16} fontWeight={500} width={100}>
          {companyname}
          </Typography>
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
          <CurrencyRupeeOutlinedIcon/>

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



      </Stack>

    </Box>
  )
}

export default Jobpost