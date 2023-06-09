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

type Props = {
  jobId: string;
  recruiterId:string;
  jobtitle: string;
  jobType: string;
  location: string;
  salary: string;
  date: string;
  about:string;
  image:string;
  companyname:string;
  
};

const Jobpost2: React.FC<Props>=({jobId,recruiterId,jobtitle,jobType,location,salary,date,about,image,companyname})=> {
  const navigate = useNavigate()
  return (
    <Box marginLeft={1} sx={{ width: 350, height: 'auto', borderRadius: 2, boxShadow: 6,marginBottom:2 }}  onClick={() => navigate(`/user/jobdetails/${jobId}`)}>
      <Stack >
        <Stack direction={'row'}>
          <Avatar
            alt=""
            src={image}
            sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 1 }}
          />

          <Typography marginLeft={3} marginTop={7} fontSize={16} fontWeight={500}>
           {companyname}
          </Typography>
          <ListItemButton sx={{ marginTop: 6, marginLeft: 6 }} >
            <ListItemIcon>
              <AddLocationAltIcon />

            </ListItemIcon>
            <ListItemText primary={location} />
          </ListItemButton>

        </Stack>
        <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500}>
         {jobtitle}
        </Typography>
        <Stack direction={'row'} spacing={2} marginTop={3}>
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

        </Stack>
        <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={300}>
         {about}


        </Typography>

        <Stack direction={'row'} marginTop={5} marginLeft={4} flexDirection={'row'}>


          <ListItemText primary="HTML" />
          <ListItemText primary="CSS" />
          <ListItemText primary="Javascript" />




        </Stack>
        <Stack direction={'row'} marginTop={3}>
          <ListItemButton   >
            <ListItemIcon>
              <CurrencyRupeeOutlinedIcon />

            </ListItemIcon>
            <ListItemText primary={salary} />
          </ListItemButton>

          <Button variant="contained" sx={{ width: 100, height: 40, borderRadius: 2, backgroundColor: "#3C6FF5", marginRight: 4 }} >Apply</Button>

        </Stack>





      </Stack>

    </Box>

  )
}

export default Jobpost2