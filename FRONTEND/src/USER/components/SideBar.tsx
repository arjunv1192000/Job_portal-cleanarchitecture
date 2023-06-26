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
import { useEffect, useState } from 'react';
import axios from '../utils/axios.ts'
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
      profile: boolean | null;
    };
  };
};

function SideBar() {
  const navigate = useNavigate();

  const userdata = useSelector((state: RootState) => state.user.value);
  console.log(userdata, "profilesetting")
  const userId = userdata.id
  console.log(userId);

  const [user, setuser] = useState<any>()

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

  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));


  const handleProfileClick = () => {
    if (user.profile) {
      navigate('/user/profile');
    } else {
      navigate('/user/addprofile');
    }
  };
  const handleJobClick = () => {
    if (user.profile) {
      navigate('/user/jobs');
    } else {
      navigate('/user/addprofile');
    }
  };



  return (

    <Box marginLeft={isMobile ? 15:1} sx={{ width: isMobile ? '70%' : 300, height: isMobile ? 400 : 500, borderRadius: 2 }}>
      <Box sx={{ borderRadius: 2, boxShadow: 6, width: isMobile ? '100%' : 300, height: isMobile ? 330 : 400, zIndex: 1 }}>
        <Stack >
          <Avatar
            alt=""  
            src={userdata.image}
            sx={{ width: 80, height: 80, marginTop: -3, mx: 'auto' }}
          />
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
            {user?.name}


          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={300}>
            {userdata.email}


          </Typography>
          {/* {user ? (<Button variant="contained" sx={{ width: 200, borderRadius: 2, alignContent: 'center', marginLeft: 6, marginTop: 3, backgroundColor: "#3C6FF5" }} onClick={() => navigate('/user/' + (user.profile ? 'updateprofile' : 'addprofile'))} >{user?.profile ? ' Update profile' : 'Complete profile'}</Button>) : (<Button variant="contained" sx={{ width: 200, borderRadius: 2, alignContent: 'center', marginLeft: 6, marginTop: 3, backgroundColor: "#3C6FF5" }} onClick={() => navigate('/user/signup')} >Signup</Button>)} */}
          {user ? (
  <Button
    variant="contained"
    sx={{
      width: isMobile ? '50%' : 200,
      borderRadius: 2,
      alignContent: 'center',
      marginLeft: isMobile ? 15: 6,
      marginTop: isMobile ? 2 : 3,
      backgroundColor: '#3C6FF5',
    }}
    onClick={() => navigate('/user/' + (user.profile ? 'updateprofile' : 'addprofile'))}
  >
    {user?.profile ? 'Update profile' : 'Complete profile'}
  </Button>
) : (
  <Button
    variant="contained"
    sx={{
      width: isMobile ? '50%' : 200,
      borderRadius: 2,
      alignContent: 'center',
      marginLeft: isMobile ? 15 : 6,
      marginTop: isMobile ? 2 : 3,
      backgroundColor: '#3C6FF5',
    }}
    onClick={() => navigate('/user/signup')}
  >
    Signup
  </Button>
)}


          <List>
            <ListItemButton onClick={() => navigate('/')} >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="My home" />
            </ListItemButton>
            <ListItemButton onClick={handleJobClick} >
              <ListItemIcon>
                <AccountBoxIcon />

              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
            <ListItemButton onClick={handleProfileClick}>
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