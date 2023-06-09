import React from 'react'
import { Box, Stack,Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

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
  
};


const Jobpost: React.FC<Props>=({jobId,recruiterId,jobtitle,jobType,location,salary,date,image,companyname})=> {
  const navigate=useNavigate()
  return (
    <Box marginLeft={1} sx={{ width: 250  , height:200, borderRadius: 2, boxShadow: 6,backgroundColor:"white",marginBottom:3 }} onClick={() => navigate(`/user/jobdetails/${jobId}`)}>
      <Stack >
      <Stack direction={'row'}>

    
        
          <Avatar
            alt=""
            src={image}
            sx={{ width: 50, height: 50, marginTop:-2, marginLeft: 1.5 }}
          />

          <Typography marginLeft={2} marginTop={2} fontSize={16} fontWeight={500}>
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
          <ListItemText primary={date} />
        </ListItemButton>

        </Stack>



      </Stack>

    </Box>
  )
}

export default Jobpost