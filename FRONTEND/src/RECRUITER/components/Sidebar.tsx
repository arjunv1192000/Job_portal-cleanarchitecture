import React from 'react'
import { Box, List, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

type RootState = {
  user: {
    value: {
      id: string | null;
      companyname:string |null;
      name: string | null;
      email: string | null;
      image:string |null;
      access_token: string;
    };
  };
};

function SideBar() {
  const navigate=useNavigate()

  const recruiterdata = useSelector((state:RootState) => state.user.value);
  return (
    <Box marginLeft={2} sx={{ width: 300, height: 500, borderRadius: 2,marginTop:2 }}>
      <Box  sx={{borderRadius:2,boxShadow:6,width:300,height:400}}>
        <Stack >
        <Avatar
            alt=""
            src={recruiterdata.image}
            sx={{ width: 80, height: 80, marginTop: 4, marginLeft: 13 }}
          />
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
           {recruiterdata.name}
          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
              {recruiterdata.companyname}
          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={300}>
            {recruiterdata.email}
          </Typography>
          
         
          <List>
            <ListItemButton onClick={() => navigate('/recruiter/dashboard')} >
              <ListItemIcon>
                <HomeIcon />

              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton  onClick={() => navigate('/recruiter/creation')} >
              <ListItemIcon>
                <AccountBoxIcon />

              </ListItemIcon>
              <ListItemText primary="Create jobs" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/recruiter/profile')} >
              <ListItemIcon>
                <PermContactCalendarIcon />

              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>

          </List>

        </Stack>

      </Box>


    </Box>
  )
}

export default SideBar