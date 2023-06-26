import React, { useState, useEffect } from 'react';
import { Box, List, Stack } from '@mui/material';
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
import { useSelector } from 'react-redux';
import axios from '../utils/axios'

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

function SideBar() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState('');
  const [recruiter, setrecruiter] = useState<any>()

  const recruiterdata = useSelector((state: RootState) => state.recruiter.value);
  const recruiterId = recruiterdata.id

  const handleButtonClick = (route: string) => {
    setSelectedButton(route);
    navigate(route);
  };

  useEffect(() => {
    const getuser = () => {
      axios.get('/getrecruiterdata?id=' + recruiterId)
        .then((response) => {
          setrecruiter(response.data.recruiterdata)
          console.log(response.data.recruiterdata);





        })
        .catch((error) => {
          console.error(error.message);
        });

    }
    getuser()


  }, [recruiterId]);




  return (
    <Box marginLeft={2} sx={{ width: 300, height: 500, borderRadius: 2, marginTop: 2 }}>
      <Box sx={{ borderRadius: 2, boxShadow: 6, width: 300, height: 450 }}>
        <Stack>
          <Avatar
            alt=""
            src={recruiter?.image}
            sx={{ width: 80, height: 80, marginTop: 4, marginLeft: 13 }}
          />
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
            {recruiter?.name}
          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
            {recruiter?.companyname}
          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={300}>
            {recruiter?.email}
          </Typography>

          {recruiter?.profile ? (
            <Button
              variant="contained"
              sx={{
                width: 200,
                borderRadius: 2,
                alignContent: 'center',
                marginLeft: 6,
                marginTop: 3,
                backgroundColor: '#3C6FF5',
              }}
              onClick={() => navigate('/recruiter/updateprofile')}
            >
              Update profile
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: 200,
                borderRadius: 2,
                alignContent: 'center',
                marginLeft: 6,
                marginTop: 3,
                backgroundColor: '#3C6FF5',
              }}
              onClick={() => navigate('/recruiter/addprofile')}
            >
              Complete profile
            </Button>
          )}


          <List>
            <ListItemButton
              onClick={() => handleButtonClick('/recruiter/dashboard')}
              selected={selectedButton === '/recruiter/dashboard'}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleButtonClick('/recruiter/creation')}
              selected={selectedButton === '/recruiter/creation'}
            >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Create jobs" />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleButtonClick('/recruiter/profile')}
              selected={selectedButton === '/recruiter/profile'}
            >
              <ListItemIcon>
                <PermContactCalendarIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </List>
        </Stack>
      </Box>
    </Box>
  );
}

export default SideBar;
