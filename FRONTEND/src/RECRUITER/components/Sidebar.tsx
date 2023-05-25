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

function SideBar() {
  const navigate=useNavigate()
  return (
    <Box marginLeft={1} sx={{ width: 300, height: 500, borderRadius: 2 }}>
      <Box position={'fixed'} sx={{borderRadius:2,boxShadow:6,width:300,height:160}}>
        <Stack >
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