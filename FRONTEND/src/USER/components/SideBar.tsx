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
        name: string | null;
        email: string | null;
        image:string|null;
        access_token: string;
      };
    };
  };

function SideBar() {
  const navigate=useNavigate();

  const userdata = useSelector((state:RootState) => state.user.value);
  console.log(userdata,"sdsads")
  
  
  
  

  return (
    <Box marginLeft={1} sx={{ width: 300, height: 500, borderRadius: 2, }}>
      <Box  sx={{borderRadius:2,boxShadow:6,width:300,height:'auto',zIndex:1,}}>
        <Stack >
          <Avatar
            alt=""
            src={userdata.image}
            sx={{ width: 80, height: 80,marginTop:-3,mx:'auto'}}
          />
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
            {userdata.name}
           
      
          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={300}>
            {userdata.email}
           
          
          </Typography>
          {userdata.name ? ( <Button variant="contained" sx={{ width: 200, borderRadius: 2, alignContent: 'center', marginLeft: 6, marginTop: 3, backgroundColor: "#3C6FF5" }}onClick={() => navigate('/user/addprofile')} >Complete profile</Button>):<Button variant="contained" sx={{ width: 200, borderRadius: 2, alignContent: 'center', marginLeft: 6, marginTop: 3, backgroundColor: "#3C6FF5" }}  onClick={() => navigate('/user/signup')} >Signup</Button>}
         
          
          <List>
            <ListItemButton onClick={() => navigate('/')} >
              <ListItemIcon>
                <HomeIcon />

              </ListItemIcon>
              <ListItemText primary="My home" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/user/jobs')} >
              <ListItemIcon>
                <AccountBoxIcon />

              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/user/profile')} >
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